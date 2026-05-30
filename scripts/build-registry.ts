#!/usr/bin/env tsx
// Generates registry.json by scanning src/components/.
// Run with: pnpm registry:build

import { readdir, readFile, stat, writeFile } from "fs/promises";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const COMPONENTS_DIR = join(ROOT, "src/components");
const OUTPUT = join(ROOT, "registry.json");

// npm packages to detect from import statements
const NPM_PACKAGES = [
  "@base-ui/react",
  "@internationalized/date",
  "clsx",
  "lucide-react",
  "react-aria",
  "react-day-picker",
  "react-stately",
] as const;

// Files to exclude from registry entries
const EXCLUDE_SUFFIXES = [".stories.tsx", ".stories.ts"];

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

async function buildComponentItem(name: string): Promise<RegistryItem> {
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

  // npm dependencies
  const deps = new Set<string>();
  for (const imp of allImports) {
    for (const pkg of NPM_PACKAGES) {
      if (imp === pkg || imp.startsWith(pkg + "/")) {
        deps.add(pkg);
        break;
      }
    }
  }

  // registry dependencies
  const registryDeps = new Set<string>(["theme"]);

  const hasPrimitives = registryFiles.includes("primitives.ts");
  const usesStyleUtils = allImports.some(
    (i) => i.includes("utilities/styled") || i.includes("styleUtilities"),
  );
  if (hasPrimitives || usesStyleUtils) registryDeps.add("utils");

  // cross-component deps: imports like ../Button/Button
  for (const imp of allImports) {
    const m = imp.match(/^\.\.\/([A-Z][^/]+)\//);
    if (m && m[1] !== name) registryDeps.add(toKebab(m[1]));
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
  const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true });
  const componentNames = (
    await Promise.all(
      entries
        .filter((e) => e.isDirectory())
        .map(async (e) =>
          (await isDir(join(COMPONENTS_DIR, e.name))) ? e.name : null,
        ),
    )
  )
    .filter((n): n is string => n !== null)
    .sort();

  const componentItems = await Promise.all(
    componentNames.map(buildComponentItem),
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
