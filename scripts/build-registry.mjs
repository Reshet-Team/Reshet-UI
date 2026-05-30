#!/usr/bin/env node
// Generates registry.json by scanning src/components/.
// Run with: node scripts/build-registry.mjs

import { readdir, readFile, writeFile, stat } from "fs/promises";
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
];

// Files to exclude from registry entries
const EXCLUDE_SUFFIXES = [".stories.tsx", ".stories.ts"];

// Convert PascalCase folder name to kebab-case registry name
function toKebab(name) {
  return name.replace(/([A-Z])/g, (m, l, i) =>
    i > 0 ? "-" + l.toLowerCase() : l.toLowerCase(),
  );
}

async function parseImports(filePath) {
  const content = await readFile(filePath, "utf-8");
  const imports = [];
  const re = /from\s+['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) imports.push(m[1]);
  return imports;
}

async function isDir(p) {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
}

// --- Fixed registry items ---

const THEME_FILES = [
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
  type: "registry:theme",
  target: `src/theme/${f}`,
}));

const THEME_ITEM = {
  name: "theme",
  type: "registry:theme",
  title: "MyUI Theme",
  description:
    "Design tokens: OKLCH colors, spacing, typography, radius, shadows, transitions",
  files: THEME_FILES,
};

const UTILS_ITEM = {
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

async function buildComponentItem(name) {
  const dir = join(COMPONENTS_DIR, name);
  const allFiles = await readdir(dir);

  const registryFiles = allFiles.filter(
    (f) =>
      !EXCLUDE_SUFFIXES.some((s) => f.endsWith(s)) &&
      (f.endsWith(".tsx") || f.endsWith(".ts") || f.endsWith(".scss")),
  );

  // Collect all imports from TS/TSX files in this component
  const allImports = [];
  for (const f of registryFiles) {
    if (f.endsWith(".ts") || f.endsWith(".tsx")) {
      const imports = await parseImports(join(dir, f));
      allImports.push(...imports);
    }
  }

  // --- npm dependencies ---
  const deps = new Set();
  for (const imp of allImports) {
    for (const pkg of NPM_PACKAGES) {
      if (imp === pkg || imp.startsWith(pkg + "/")) {
        deps.add(pkg);
        break;
      }
    }
  }

  // --- registry dependencies ---
  const registryDeps = new Set(["theme"]);

  // Any component with primitives.ts uses styled() from utils
  const hasPrimitives = registryFiles.includes("primitives.ts");
  const usesStyleUtils = allImports.some(
    (i) => i.includes("utilities/styled") || i.includes("styleUtilities"),
  );
  if (hasPrimitives || usesStyleUtils) registryDeps.add("utils");

  // Cross-component deps: imports like ../Button/Button or ../Select/Select
  for (const imp of allImports) {
    const m = imp.match(/^\.\.\/([A-Z][^/]+)\//);
    if (m && m[1] !== name) {
      registryDeps.add(toKebab(m[1]));
    }
  }

  // --- files list ---
  const files = registryFiles.map((f) => ({
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

async function main() {
  const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true });
  const componentNames = [];
  for (const e of entries) {
    if (e.isDirectory() && (await isDir(join(COMPONENTS_DIR, e.name)))) {
      componentNames.push(e.name);
    }
  }
  componentNames.sort();

  const componentItems = await Promise.all(
    componentNames.map(buildComponentItem),
  );

  const registry = {
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
