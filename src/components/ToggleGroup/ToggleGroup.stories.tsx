import type { Meta, StoryObj } from '@storybook/react'
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
} from 'lucide-react'
import { Toggle } from '../Toggle/Toggle'
import { ToggleGroup } from './ToggleGroup'

export default {
  title: 'Inputs/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ToggleGroup>

type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue={['center']} aria-label='Text alignment'>
      <Toggle aria-label='Align left' value='left'>
        <AlignLeft size={16} />
      </Toggle>
      <Toggle aria-label='Align center' value='center'>
        <AlignCenter size={16} />
      </Toggle>
      <Toggle aria-label='Align right' value='right'>
        <AlignRight size={16} />
      </Toggle>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup
      multiple
      defaultValue={['bold', 'italic']}
      aria-label='Text formatting'
    >
      <Toggle aria-label='Bold' value='bold'>
        <Bold size={16} />
      </Toggle>
      <Toggle aria-label='Italic' value='italic'>
        <Italic size={16} />
      </Toggle>
      <Toggle aria-label='Underline' value='underline'>
        <Underline size={16} />
      </Toggle>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ToggleGroup
      orientation='vertical'
      defaultValue={['unordered']}
      aria-label='List style'
    >
      <Toggle aria-label='Unordered list' value='unordered'>
        <List size={16} />
      </Toggle>
      <Toggle aria-label='Ordered list' value='ordered'>
        <ListOrdered size={16} />
      </Toggle>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ToggleGroup disabled defaultValue={['center']} aria-label='Text alignment'>
      <Toggle aria-label='Align left' value='left'>
        <AlignLeft size={16} />
      </Toggle>
      <Toggle aria-label='Align center' value='center'>
        <AlignCenter size={16} />
      </Toggle>
      <Toggle aria-label='Align right' value='right'>
        <AlignRight size={16} />
      </Toggle>
    </ToggleGroup>
  ),
}
