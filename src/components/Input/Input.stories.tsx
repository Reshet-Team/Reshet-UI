import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

const SearchIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <circle cx='6.5' cy='6.5' r='4' />
    <path d='M10 10l3 3' strokeLinecap='round' />
  </svg>
)

const LockIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <rect x='3' y='7' width='10' height='7' rx='1.5' />
    <path d='M5 7V5a3 3 0 016 0v2' strokeLinecap='round' />
  </svg>
)

export const Default: Story = {
  render: () => <Input placeholder='Enter text…' />,
}

export const WithStartSlot: Story = {
  render: () => <Input startSlot={<SearchIcon />} placeholder='Search…' />,
}

export const WithEndSlot: Story = {
  render: () => (
    <Input endSlot={<LockIcon />} placeholder='Password' type='password' />
  ),
}

export const WithBothSlots: Story = {
  render: () => (
    <Input
      startSlot={<SearchIcon />}
      endSlot={<LockIcon />}
      placeholder='Both slots'
    />
  ),
}

export const Disabled: Story = {
  render: () => <Input placeholder='Not editable' disabled />,
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
      <Input size='sm' startSlot={<SearchIcon />} placeholder='Small' />
      <Input size='md' startSlot={<SearchIcon />} placeholder='Medium' />
      <Input size='lg' startSlot={<SearchIcon />} placeholder='Large' />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: 320,
      }}
    >
      <Input placeholder='No slots' />
      <Input startSlot={<SearchIcon />} placeholder='Start slot' />
      <Input endSlot={<LockIcon />} placeholder='End slot' />
      <Input
        startSlot={<SearchIcon />}
        endSlot={<LockIcon />}
        placeholder='Both slots'
      />
      <Input placeholder='Disabled' disabled />
    </div>
  ),
}
