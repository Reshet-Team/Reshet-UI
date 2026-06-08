import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { ScrollArea } from './ScrollArea'

export default {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollArea>

type Story = StoryObj<typeof ScrollArea>

export const Vertical: Story = {
  render: function Vertical() {
    const { t } = useTranslation()
    const paragraphs = [
      t('scrollArea.content1'),
      t('scrollArea.content2'),
      t('scrollArea.content3'),
      t('scrollArea.content4'),
      t('scrollArea.content5'),
      t('scrollArea.content6'),
    ]
    return (
      <ScrollArea
        style={{
          width: 384,
          height: 160,
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '0.5rem 1.25rem 0.5rem 0.75rem',
          }}
        >
          {paragraphs.map((text, i) => (
            <p key={i} style={{ margin: 0 }}>
              {text}
            </p>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

export const BothAxes: Story = {
  render: () => (
    <ScrollArea orientation='both' style={{ width: 320, height: 320 }}>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 6.25rem)',
          gridTemplateRows: 'repeat(10, 6.25rem)',
          gap: '0.75rem',
          margin: 0,
          padding: '0.75rem 1.5rem 1.5rem 0.75rem',
          listStyle: 'none',
        }}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-bg-elevated)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--color-fg-muted)',
            }}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </ScrollArea>
  ),
}
