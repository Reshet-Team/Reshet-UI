#!/usr/bin/env tsx
// Generates registry.json by scanning src/components/.
// Run with: pnpm registry:build

import { readdir, readFile, stat, writeFile } from "fs/promises";
import { dirname, join, relative, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const COMPONENTS_DIR = join(ROOT, "src/components");
const OUTPUT = join(ROOT, "registry.json");

// Files to exclude from registry entries
const EXCLUDE_SUFFIXES = [".stories.tsx", ".stories.ts"];

// Packages that every React project already provides
const IMPLICIT_DEPS = new Set(["react", "react-dom"]);

type RegistryType = "registry:ui" | "registry:lib" | "registry:theme";

interface RegistryFile {
  path: string;
  type: RegistryType;
  target: string;
}

interface RegistryItem {
  name: string;
  type: RegistryType;
  title: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

function toKebab(name: string): string {
  return name.replace(/([A-Z])/g, (m, l, i) =>
    i > 0 ? "-" + l.toLowerCase() : l.toLowerCase(),
  );
}

/** Strip extension and SCSS partial underscore prefix for loose matching. */
function normalizePath(p: string): string {
  const noExt = p.replace(/\.[^/.]+$/, "");
  // /theme/_mixins → /theme/mixins (SCSS partials)
  return noExt.replace(/([\\/])_([^\\/]+)$/, "$1$2");
}

/**
 * Build a map from normalized absolute path → registry item name
 * for every file declared in the given fixed items.
 */
function buildSourceMap(fixedItems: RegistryItem[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const item of fixedItems) {
    for (const file of item.files) {
      const abs = join(ROOT, file.path);
      map.set(normalizePath(abs), item.name);
    }
  }
  return map;
}

/**
 * Resolve a path-alias import (@/...) to an absolute path using the same
 * alias the Vite config defines: @/ → src/.
 */
function resolveAlias(imp: string): string {
  return join(ROOT, "src", imp.slice(2)); // strip "@/"
}

/** Extract bare npm package name from any import specifier. */
function extractPackageName(imp: string): string | null {
  if (
    imp.startsWith(".") ||
    imp.startsWith("/") ||
    imp.startsWith("@/") ||
    imp.startsWith("node:")
  )
    return null;
  if (imp.startsWith("@")) {
    const parts = imp.split("/");
    return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : null;
  }
  return imp.split("/")[0];
}

/** Load runtime dependencies from package.json. */
async function loadRuntimeDeps(): Promise<Set<string>> {
  const raw = await readFile(join(ROOT, "package.json"), "utf-8");
  const pkg = JSON.parse(raw) as { dependencies?: Record<string, string> };
  return new Set(Object.keys(pkg.dependencies ?? {}));
}

/** Parse `from '…'` specifiers from a TS/TSX file. */
async function parseTsImports(filePath: string): Promise<string[]> {
  const content = await readFile(filePath, "utf-8");
  const imports: string[] = [];
  const re = /from\s+['"]([^'"]+)['"]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) imports.push(m[1]);
  return imports;
}

/** Parse `@use '…'` / `@import '…'` specifiers from a SCSS file. */
async function parseScssUses(filePath: string): Promise<string[]> {
  const content = await readFile(filePath, "utf-8");
  const uses: string[] = [];
  const re = /@(?:use|import)\s+['"]([^'"]+)['"]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) uses.push(m[1]);
  return uses;
}

async function isDir(p: string): Promise<boolean> {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
}

// --- Fixed registry items ---

const THEME_ITEM: RegistryItem = {
  name: "theme",
  type: "registry:theme",
  title: "MyUI Theme",
  description:
    "Design tokens: OKLCH colors, spacing, typography, radius, shadows, transitions",
  files: [
    "globals.scss",
    "_mixins.scss",
    "colors.scss",
    "spacing.scss",
    "sizes.scss",
    "typography.scss",
    "radius.scss",
    "shadows.scss",
    "transitions.scss",
  ].map((f) => ({
    path: `src/theme/${f}`,
    type: "registry:theme" as const,
    target: `src/theme/${f}`,
  })),
};

const UTILS_ITEM: RegistryItem = {
  name: "utils",
  type: "registry:lib",
  title: "MyUI Utilities",
  description: "Shared styled() helper and slot-prop type utilities",
  dependencies: ["clsx"],
  files: [
    {
      path: "src/utilities/styled.tsx",
      type: "registry:lib",
      target: "src/utilities/styled.tsx",
    },
    {
      path: "src/types/styleUtilities.ts",
      type: "registry:lib",
      target: "src/types/styleUtilities.ts",
    },
  ],
};

const FIXED_ITEMS: RegistryItem[] = [THEME_ITEM, UTILS_ITEM];

// --- Component scanning ---

async function buildComponentItem(
  name: string,
  runtimeDeps: Set<string>,
  componentNames: Set<string>,
  sourceMap: Map<string, string>,
): Promise<RegistryItem> {
  const dir = join(COMPONENTS_DIR, name);
  const allFiles = await readdir(dir);

  const registryFiles = allFiles.filter(
    (f) =>
      !EXCLUDE_SUFFIXES.some((s) => f.endsWith(s)) &&
      (f.endsWith(".tsx") || f.endsWith(".ts") || f.endsWith(".scss")),
  );

  const deps = new Set<string>();
  const registryDeps = new Set<string>();

  // Any component with a stylesheet implicitly depends on theme tokens being defined
  if (registryFiles.some((f) => f.endsWith(".scss"))) {
    registryDeps.add("theme");
  }

  for (const f of registryFiles) {
    const filePath = join(dir, f);

    if (f.endsWith(".ts") || f.endsWith(".tsx")) {
      for (const imp of await parseTsImports(filePath)) {
        if (imp.startsWith(".")) {
          // Relative import — resolve and check source map or components dir
          const resolved = normalizePath(resolve(dirname(filePath), imp));

          const fixedItem = sourceMap.get(resolved);
          if (fixedItem) {
            registryDeps.add(fixedItem);
            continue;
          }

          const relToComponents = relative(COMPONENTS_DIR, resolved);
          const parts = relToComponents.split("/");
          if (!relToComponents.startsWith("..") && parts.length >= 1) {
            const depName = parts[0];
            if (componentNames.has(depName) && depName !== name) {
              registryDeps.add(toKebab(depName));
            }
          }
        } else if (imp.startsWith("@/")) {
          const resolved = normalizePath(resolveAlias(imp));
          const fixedItem = sourceMap.get(resolved);
          if (fixedItem) registryDeps.add(fixedItem);
        } else {
          const pkg = extractPackageName(imp);
          if (pkg && runtimeDeps.has(pkg) && !IMPLICIT_DEPS.has(pkg)) {
            deps.add(pkg);
          }
        }
      }
    }

    if (f.endsWith(".scss")) {
      for (const imp of await parseScssUses(filePath)) {
        if (imp.startsWith("@/")) {
          const resolved = normalizePath(resolveAlias(imp));
          const fixedItem = sourceMap.get(resolved);
          if (fixedItem) registryDeps.add(fixedItem);
        } else if (imp.startsWith(".")) {
          const resolved = normalizePath(resolve(dirname(filePath), imp));
          const fixedItem = sourceMap.get(resolved);
          if (fixedItem) registryDeps.add(fixedItem);
        }
      }
    }
  }

  const files: RegistryFile[] = registryFiles.map((f) => ({
    path: `src/components/${name}/${f}`,
    type: "registry:ui",
    target: `src/components/ui/${name}/${f}`,
  }));

  return {
    name: toKebab(name),
    type: "registry:ui",
    title: name,
    dependencies: [...deps].sort(),
    registryDependencies: [...registryDeps].sort(),
    files,
  };
}

async function main(): Promise<void> {
  const [runtimeDeps, entries] = await Promise.all([
    loadRuntimeDeps(),
    readdir(COMPONENTS_DIR, { withFileTypes: true }),
  ]);

  const componentNames = new Set(
    (
      await Promise.all(
        entries
          .filter((e) => e.isDirectory())
          .map(async (e) =>
            (await isDir(join(COMPONENTS_DIR, e.name))) ? e.name : null,
          ),
      )
    ).filter((n): n is string => n !== null),
  );

  const sourceMap = buildSourceMap(FIXED_ITEMS);
  const sortedNames = [...componentNames].sort();

  const componentItems = await Promise.all(
    sortedNames.map((name) =>
      buildComponentItem(name, runtimeDeps, componentNames, sourceMap),
    ),
  );

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "myui",
    homepage: "https://github.com/idos350/myui",
    items: [...FIXED_ITEMS, ...componentItems],
  };

  await writeFile(OUTPUT, JSON.stringify(registry, null, 2) + "\n");
  console.log(
    `registry.json written — ${componentItems.length} components + ${FIXED_ITEMS.length} fixed items`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
