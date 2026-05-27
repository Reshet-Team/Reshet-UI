import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './ScrollArea'

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollArea>

type Story = StoryObj<typeof ScrollArea>

const sampleText = (
  <>
    <p style={{ margin: 0 }}>
      Vernacular architecture is building done outside any academic tradition,
      and without professional guidance. It is not a particular architectural
      movement or style, but rather a broad category, encompassing a wide range
      and variety of building types, with differing methods of construction,
      from around the world, both historical and extant and classical and
      modern.
    </p>
    <p style={{ margin: 0 }}>
      Vernacular architecture constitutes 95% of the world's built environment,
      as estimated in 1995 by Amos Rapoport, as measured against the small
      percentage of new buildings every year designed by architects and built by
      engineers. This type of architecture usually serves immediate, local
      needs, is constrained by the materials available in its particular region
      and reflects local traditions and cultural practices.
    </p>
    <p style={{ margin: 0 }}>
      The study of vernacular architecture does not examine formally schooled
      architects, but instead that of the design skills and tradition of local
      builders, who were rarely given any attribution for the work. More
      recently, vernacular architecture has been examined by designers and the
      building industry in an effort to be more energy conscious with
      contemporary design and construction—part of a broader interest in
      sustainable design.
    </p>
  </>
)

export const Vertical: Story = {
  render: () => (
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
        {sampleText}
      </div>
    </ScrollArea>
  ),
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
