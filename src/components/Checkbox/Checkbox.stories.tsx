import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked by default',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}
    >
      <Checkbox size='sm' label='Small' defaultChecked />
      <Checkbox size='md' label='Medium' defaultChecked />
      <Checkbox size='lg' label='Large' defaultChecked />
    </div>
  ),
}

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive updates about new products and features.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}
    >
      <Checkbox label='Unchecked' />
      <Checkbox label='Checked' defaultChecked />
      <Checkbox label='Indeterminate' indeterminate />
      <Checkbox label='Disabled' disabled />
      <Checkbox label='Disabled checked' defaultChecked disabled />
      <Checkbox label='Disabled indeterminate' indeterminate disabled />
    </div>
  ),
}

function SelectAllDemo() {
  const options = ['Option A', 'Option B', 'Option C']
  const [checked, setChecked] = React.useState([false, false, false])
  const allChecked = checked.every(Boolean)
  const someChecked = checked.some(Boolean)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
      }}
    >
      <Checkbox
        label='Select all'
        checked={allChecked}
        indeterminate={someChecked && !allChecked}
        onCheckedChange={(val) => setChecked(checked.map(() => val))}
      />
      {options.map((option, i) => (
        <Checkbox
          key={option}
          label={option}
          checked={checked[i]}
          onCheckedChange={(val) => {
            const next = [...checked]
            next[i] = val
            setChecked(next)
          }}
          wrapperProps={{ style: { paddingInlineStart: 'var(--space-6)' } }}
        />
      ))}
    </div>
  )
}

export const SelectAll: Story = {
  render: () => <SelectAllDemo />,
}
