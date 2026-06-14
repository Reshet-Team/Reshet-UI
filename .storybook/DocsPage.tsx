import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from '@storybook/addon-docs/blocks'
import { ChevronRight, ExternalLink } from 'lucide-react'
import registry from '../registry.json'
import { CommandCopy } from '../src/components/CommandCopy/CommandCopy'

const changelogs = import.meta.glob('../src/components/*/CHANGELOG.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const registryNames = new Set(registry.items.map((item) => item.name))

function toRegistryName(title: string): string {
  const segment = title.split('/').pop() ?? title
  // PascalCase/camelCase → kebab-case: insert dash before each uppercase letter (except first)
  return segment.replace(/([A-Z])/g, (_, letter, offset: number) =>
    offset > 0 ? `-${letter.toLowerCase()}` : letter.toLowerCase(),
  )
}

function InstallCommand() {
  const { preparedMeta } = useOf('meta', ['meta'])
  const name = toRegistryName((preparedMeta as { title?: string }).title ?? '')
  if (!registryNames.has(name)) return null

  return (
    <div
      style={{
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        width: '28rem',
      }}
    >
      <Subtitle>Installation</Subtitle>
      <CommandCopy
        commands={{
          pnpm: `pnpm dlx shadcn@latest add @reshet-ui/${name}`,
          npm: `npx shadcn@latest add @reshet-ui/${name}`,
          yarn: `yarn dlx shadcn@latest add @reshet-ui/${name}`,
          bun: `bunx --bun shadcn@latest add @reshet-ui/${name}`,
        }}
      />
    </div>
  )
}

const REPO = 'https://github.com/idos350/myui'

function ChangelogSection() {
  const { preparedMeta } = useOf('meta', ['meta'])
  const name = toRegistryName((preparedMeta as { title?: string }).title ?? '')
  type Match = { content: string; folder: string }
  const match = Object.entries(changelogs).reduce<Match | null>((found, [k, v]) => {
    if (found) return found
    const folder = k.match(/\/components\/([^/]+)\/CHANGELOG/)?.[1]
    return folder && toRegistryName(folder) === name ? { content: v, folder } : null
  }, null)
  if (!match) return null

  const { content, folder } = match
  const githubUrl = `${REPO}/blob/main/src/components/${folder}/CHANGELOG.md`

  return (
    <>
      <style>{`
        details.sb-changelog > summary { list-style: none; }
        details.sb-changelog > summary::-webkit-details-marker { display: none; }
        details.sb-changelog > summary .sb-changelog-chevron { transition: transform 200ms ease; }
        details.sb-changelog[open] > summary .sb-changelog-chevron { transform: rotate(90deg); }
      `}</style>
      <details className='sb-changelog' style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            userSelect: 'none',
            borderTop: '1px solid rgba(128,128,128,0.2)',
            paddingTop: '1.5rem',
          }}
        >
          <ChevronRight
            className='sb-changelog-chevron'
            size={18}
            style={{ opacity: 0.5, flexShrink: 0 }}
          />
          Changelog
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              opacity: 0.5,
              marginInlineStart: '0.25rem',
              fontSize: 14,
            }}
          >
            View on GitHub
            <ExternalLink size={14} />
          </a>
        </summary>
        <div style={{ marginTop: '1rem' }}>
          <Markdown>{content}</Markdown>
        </div>
      </details>
    </>
  )
}

export function DocsPage() {
  return (
    <>
      <Title />
      <Description />
      <Primary />
      <InstallCommand />
      <Controls />
      <ChangelogSection />
      <Stories />
    </>
  )
}
