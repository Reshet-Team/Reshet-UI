import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '.'

export default {
  title: 'Components/Select',
  component: Select.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Select.Root>

type Story = StoryObj<typeof Select.Root>

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian' },
  { value: 'elderberry', label: 'Elderberry' },
]

export const Default: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Select.Root items={fruits}>
        <Select.Trigger placeholder='Select a fruit' />
        <Select.List items={fruits}>
          {(fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          )}
        </Select.List>
      </Select.Root>
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Select.Root items={fruits} defaultValue='banana'>
        <Select.Trigger />
        <Select.List items={fruits}>
          {(fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          )}
        </Select.List>
      </Select.Root>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Select.Root items={fruits} defaultValue='apple' disabled>
        <Select.Trigger />
        <Select.List items={fruits}>
          {(fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          )}
        </Select.List>
      </Select.Root>
    </div>
  ),
}

export const WithDisabledItem: Story = {
  render: () => {
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'durian', label: 'Durian (unavailable)', disabled: true },
      { value: 'cherry', label: 'Cherry' },
    ]
    return (
      <div style={{ width: 240 }}>
        <Select.Root items={options}>
          <Select.Trigger placeholder='Select a fruit' />
          <Select.List items={options}>
            {(fruit) => (
              <Select.Item
                key={fruit.value}
                value={fruit.value}
                disabled={fruit.disabled}
              >
                {fruit.label}
              </Select.Item>
            )}
          </Select.List>
        </Select.Root>
      </div>
    )
  },
}

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
        <Select.Root key={size} items={fruits}>
          <Select.Trigger size={size} placeholder={size.toUpperCase()} />
          <Select.List items={fruits}>
            {(fruit) => (
              <Select.Item key={fruit.value} value={fruit.value}>
                {fruit.label}
              </Select.Item>
            )}
          </Select.List>
        </Select.Root>
      ))}
    </div>
  ),
}

export const Grouped: Story = {
  render: () => {
    const produce = [
      {
        label: 'Fruits',
        options: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'cherry', label: 'Cherry' },
        ],
      },
      {
        label: 'Vegetables',
        options: [
          { value: 'carrot', label: 'Carrot' },
          { value: 'lettuce', label: 'Lettuce' },
          { value: 'spinach', label: 'Spinach' },
        ],
      },
    ]
    const flatItems = produce.flatMap((g) => g.options)
    return (
      <div style={{ width: 240 }}>
        <Select.Root items={flatItems}>
          <Select.Trigger placeholder='Select produce' />
          <Select.List items={produce}>
            {(group) => (
              <Select.Group
                key={group.label}
                label={group.label}
                items={group.options}
              >
                {(opt) => (
                  <Select.Item key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Item>
                )}
              </Select.Group>
            )}
          </Select.List>
        </Select.Root>
      </div>
    )
  },
}

export const ManyOptions: Story = {
  render: () => {
    const options = Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    }))
    return (
      <div style={{ width: 240 }}>
        <Select.Root items={options}>
          <Select.Trigger placeholder='Select an option' />
          <Select.List items={options}>
            {(opt) => (
              <Select.Item key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Item>
            )}
          </Select.List>
        </Select.Root>
      </div>
    )
  },
}
