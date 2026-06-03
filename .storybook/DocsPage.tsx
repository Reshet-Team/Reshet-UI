import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from '@storybook/addon-docs/blocks'
import registry from '../registry.json'
import { CommandCopy } from '../src/components/CommandCopy/CommandCopy'

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
          pnpm: `pnpm dlx shadcn@latest add @myui/${name}`,
          npm: `npx shadcn@latest add @myui/${name}`,
          yarn: `yarn dlx shadcn@latest add @myui/${name}`,
          bun: `bunx --bun shadcn@latest add @myui/${name}`,
        }}
      />
    </div>
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
      <Stories />
    </>
  )
}
