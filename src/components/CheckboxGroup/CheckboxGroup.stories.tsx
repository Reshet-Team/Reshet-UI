import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from './CheckboxGroup'

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>

type Story = StoryObj<typeof CheckboxGroup>

const fruitItems = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

const permissionItems = [
  { value: 'read', label: 'Read', description: 'View all content' },
  { value: 'write', label: 'Write', description: 'Create and edit content' },
  {
    value: 'delete',
    label: 'Delete',
    description: 'Remove content permanently',
  },
  {
    value: 'admin',
    label: 'Admin',
    description: 'Full system access',
    disabled: true,
  },
]

export const Primary: Story = {
  render: () => (
    <CheckboxGroup
      items={fruitItems}
      legend='Favourite apples'
      defaultValue={['fuji']}
    />
  ),
}

export const Secondary: Story = {
  render: () => (
    <CheckboxGroup
      items={permissionItems}
      legend='Permissions'
      defaultValue={['read']}
    />
  ),
}

export const WithSelectAll: Story = {
  render: () => (
    <CheckboxGroup
      items={fruitItems}
      legend='Select apples'
      showSelectAll
      defaultValue={['fuji', 'gala']}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <CheckboxGroup
      items={fruitItems}
      legend='Disabled group'
      defaultValue={['fuji']}
      disabled
    />
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
      }}
    >
      <CheckboxGroup
        items={fruitItems}
        legend='Small'
        size='sm'
        defaultValue={['fuji']}
      />
      <CheckboxGroup
        items={fruitItems}
        legend='Medium'
        size='md'
        defaultValue={['fuji']}
      />
      <CheckboxGroup
        items={fruitItems}
        legend='Large'
        size='lg'
        defaultValue={['fuji']}
      />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
      }}
    >
      <CheckboxGroup
        items={fruitItems}
        legend='Basic'
        defaultValue={['gala']}
      />
      <CheckboxGroup
        items={permissionItems}
        legend='With descriptions'
        defaultValue={['read', 'write']}
      />
      <CheckboxGroup
        items={fruitItems}
        legend='With select all'
        showSelectAll
        defaultValue={['fuji']}
      />
    </div>
  ),
}
