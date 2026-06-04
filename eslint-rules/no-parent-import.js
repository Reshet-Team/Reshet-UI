import { dirname, relative, resolve } from 'path'

const SRC_DIR = resolve(import.meta.dirname, '../src')

/** Bans `../` imports in registry source files and auto-fixes them to `@/` aliases. */
export default {
  meta: {
    type: 'problem',
    fixable: 'code',
    messages: {
      noParent:
        'Use the @/ alias instead of relative ../ paths (e.g. @/components/Button/Button, @/hooks/useFoo).',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const value = node.source.value
        if (!value.startsWith('..')) return

        const abs = resolve(dirname(context.filename), value)
        const rel = relative(SRC_DIR, abs).replace(/\\/g, '/')
        if (rel.startsWith('..')) return // outside src/ — can't fix

        context.report({
          node: node.source,
          messageId: 'noParent',
          fix: (fixer) => fixer.replaceText(node.source, `'@/${rel}'`),
        })
      },
    }
  },
}
