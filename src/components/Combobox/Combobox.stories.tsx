import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import { Combobox } from '.'

export default {
  title: 'Components/Combobox',
  component: Combobox.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox.Root>

type Story = StoryObj<typeof Combobox.Root>

// ─── Sample data ──────────────────────────────────────────────────────────────

const fruits = [
  'Apple',
  'Apricot',
  'Banana',
  'Blueberry',
  'Cherry',
  'Durian',
  'Elderberry',
  'Fig',
  'Grape',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Raspberry',
  'Strawberry',
]

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Combobox.Root items={fruits}>
        <Combobox.InputGroup placeholder='Choose a fruit…' />
        <Combobox.List>
          {(fruit: string) => (
            <Combobox.Item key={fruit} value={fruit}>
              {fruit}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Root>
    </div>
  ),
}

// ─── With default value ───────────────────────────────────────────────────────

export const WithDefaultValue: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Combobox.Root items={fruits} defaultValue='Mango'>
        <Combobox.InputGroup placeholder='Choose a fruit…' />
        <Combobox.List>
          {(fruit: string) => (
            <Combobox.Item key={fruit} value={fruit}>
              {fruit}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Root>
    </div>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        width: 240,
      }}
    >
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Combobox.Root key={size} items={fruits}>
          <Combobox.InputGroup
            size={size}
            placeholder={`${size.toUpperCase()} — choose a fruit`}
          />
          <Combobox.List>
            {(fruit: string) => (
              <Combobox.Item key={fruit} value={fruit}>
                {fruit}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Root>
      ))}
    </div>
  ),
}

// ─── Grouped ─────────────────────────────────────────────────────────────────

const produce = [
  {
    value: 'Fruits',
    items: ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange'],
  },
  {
    value: 'Vegetables',
    items: ['Broccoli', 'Carrot', 'Cucumber', 'Lettuce', 'Spinach', 'Tomato'],
  },
  {
    value: 'Herbs',
    items: ['Basil', 'Chive', 'Cilantro', 'Dill', 'Mint', 'Thyme'],
  },
]

export const Grouped: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Combobox.Root items={produce}>
        <Combobox.InputGroup placeholder='Search produce…' />
        <Combobox.List>
          {(group: (typeof produce)[0]) => (
            <Combobox.Group
              key={group.value}
              label={group.value}
              items={group.items}
            >
              {(item: string) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.Group>
          )}
        </Combobox.List>
      </Combobox.Root>
    </div>
  ),
}

// ─── Multiple select ──────────────────────────────────────────────────────────

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Combobox.Root multiple items={fruits} defaultValue={['Apple', 'Mango']}>
        <Combobox.InputGroup placeholder='Add fruits…'>
          {(item: string) => (
            <Combobox.Chip key={item}>
              {item}
              <Combobox.ChipRemove aria-label={`Remove ${item}`}>
                <X size={10} aria-hidden />
              </Combobox.ChipRemove>
            </Combobox.Chip>
          )}
        </Combobox.InputGroup>
        <Combobox.List>
          {(fruit: string) => (
            <Combobox.Item key={fruit} value={fruit}>
              {fruit}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Root>
    </div>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Combobox.Root items={fruits} defaultValue='Cherry' disabled>
        <Combobox.InputGroup placeholder='Choose a fruit…' />
        <Combobox.List>
          {(fruit: string) => (
            <Combobox.Item key={fruit} value={fruit}>
              {fruit}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Root>
    </div>
  ),
}
