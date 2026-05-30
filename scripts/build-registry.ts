#!/usr/bin/env tsx
// Generates registry.json by scanning src/components/.
// Run with: pnpm registry:build

import { readdir, readFile, stat, writeFile } from "fs/promises";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const COMPONENTS_DIR = join(ROOT, "src/components");
const OUTPUT = join(ROOT, "registry.json");

// Files to exclude from registry entries
const EXCLUDE_SUFFIXES = [".stories.tsx", ".stories.ts"];

// Internal source paths that map to registry items rather than npm packages
const REGISTRY_ITEM_SOURCES: Record<string, string> = {
  "../../utilities/styled": "utils",
  "../../types/styleUtilities": "utils",
};

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

/** Extract the bare package name from any import specifier. Returns null for
 *  relative imports, path aliases, and Node built-ins. */
function extractPackageName(imp: string): string | null {
  if (
    imp.startsWith(".") ||
    imp.startsWith("/") ||
    imp.startsWith("@/") ||
    imp.startsWith("node:")
  )
    return null;
  // Scoped: @scope/name/deep → @scope/name
  if (imp.startsWith("@")) {
    const parts = imp.split("/");
    return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : null;
  }
  // Regular: name/deep → name
  return imp.split("/")[0];
}

/** Load the set of runtime dependencies declared in package.json. */
async function loadRuntimeDeps(): Promise<Set<string>> {
  const raw = await readFile(join(ROOT, "package.json"), "utf-8");
  const pkg = JSON.parse(raw) as { dependencies?: Record<string, string> };
  return new Set(Object.keys(pkg.dependencies ?? {}));
}

async function parseImports(filePath: string): Promise<string[]> {
  const content = await readFile(filePath, "utf-8");
  const imports: string[] = [];
  const re = /from\s+['"]([^'"]+)['"]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) imports.push(m[1]);
  return imports;
}

async function isDir(p: string): Promise<boolean> {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
}

// --- Fixed registry items ---

const THEME_FILES: RegistryFile[] = [
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
}));

const THEME_ITEM: RegistryItem = {
  name: "theme",
  type: "registry:theme",
  title: "MyUI Theme",
  description:
    "Design tokens: OKLCH colors, spacing, typography, radius, shadows, transitions",
  files: THEME_FILES,
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

// --- Component scanning ---

async function buildComponentItem(
  name: string,
  runtimeDeps: Set<string>,
  componentNames: Set<string>,
): Promise<RegistryItem> {
  const dir = join(COMPONENTS_DIR, name);
  const allFiles = await readdir(dir);

  const registryFiles = allFiles.filter(
    (f) =>
      !EXCLUDE_SUFFIXES.some((s) => f.endsWith(s)) &&
      (f.endsWith(".tsx") || f.endsWith(".ts") || f.endsWith(".scss")),
  );

  const allImports: string[] = [];
  for (const f of registryFiles) {
    if (f.endsWith(".ts") || f.endsWith(".tsx")) {
      const imports = await parseImports(join(dir, f));
      allImports.push(...imports);
    }
  }

  // Packages that every React project already provides — no need to list them
  const IMPLICIT_DEPS = new Set(["react", "react-dom"]);

  // npm dependencies — any import whose package name is in package.json dependencies
  const deps = new Set<string>();
  for (const imp of allImports) {
    const pkg = extractPackageName(imp);
    if (pkg && runtimeDeps.has(pkg) && !IMPLICIT_DEPS.has(pkg)) deps.add(pkg);
  }

  // registry dependencies
  const registryDeps = new Set<string>(["theme"]);

  // primitives.ts always pulls in the styled() utility from utils
  if (registryFiles.includes("primitives.ts")) registryDeps.add("utils");

  for (const imp of allImports) {
    // explicit internal source → registry item mappings
    if (REGISTRY_ITEM_SOURCES[imp]) {
      registryDeps.add(REGISTRY_ITEM_SOURCES[imp]);
      continue;
    }

    // cross-component imports: ../Button/… → button registry item
    const m = imp.match(/^\.\.\/([A-Z][^/]+)\//);
    if (m) {
      const depName = m[1];
      if (componentNames.has(depName) && depName !== name) {
        registryDeps.add(toKebab(depName));
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

  const sortedNames = [...componentNames].sort();

  const componentItems = await Promise.all(
    sortedNames.map((name) =>
      buildComponentItem(name, runtimeDeps, componentNames),
    ),
  );

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "myui",
    homepage: "https://github.com/idos350/myui",
    items: [THEME_ITEM, UTILS_ITEM, ...componentItems],
  };

  await writeFile(OUTPUT, JSON.stringify(registry, null, 2) + "\n");
  console.log(
    `registry.json written — ${componentItems.length} components + theme + utils`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
