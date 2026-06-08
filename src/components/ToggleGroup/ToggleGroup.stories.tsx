import type { Meta, StoryObj } from '@storybook/react'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Underline,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
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
  render: function Default() {
    const { t } = useTranslation()
    return (
      <ToggleGroup
        defaultValue={['center']}
        aria-label={t('toggleGroup.textAlignment')}
      >
        <Toggle aria-label={t('toggleGroup.alignLeft')} value='left'>
          <AlignLeft size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.alignCenter')} value='center'>
          <AlignCenter size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.alignRight')} value='right'>
          <AlignRight size={16} />
        </Toggle>
      </ToggleGroup>
    )
  },
}

export const Multiple: Story = {
  render: function Multiple() {
    const { t } = useTranslation()
    return (
      <ToggleGroup
        multiple
        defaultValue={['bold', 'italic']}
        aria-label={t('toggleGroup.textFormatting')}
      >
        <Toggle aria-label={t('toggleGroup.bold')} value='bold'>
          <Bold size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.italic')} value='italic'>
          <Italic size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.underline')} value='underline'>
          <Underline size={16} />
        </Toggle>
      </ToggleGroup>
    )
  },
}

export const Vertical: Story = {
  render: function Vertical() {
    const { t } = useTranslation()
    return (
      <ToggleGroup
        orientation='vertical'
        defaultValue={['unordered']}
        aria-label={t('toggleGroup.listStyle')}
      >
        <Toggle aria-label={t('toggleGroup.unorderedList')} value='unordered'>
          <List size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.orderedList')} value='ordered'>
          <ListOrdered size={16} />
        </Toggle>
      </ToggleGroup>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <ToggleGroup
        disabled
        defaultValue={['center']}
        aria-label={t('toggleGroup.textAlignment')}
      >
        <Toggle aria-label={t('toggleGroup.alignLeft')} value='left'>
          <AlignLeft size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.alignCenter')} value='center'>
          <AlignCenter size={16} />
        </Toggle>
        <Toggle aria-label={t('toggleGroup.alignRight')} value='right'>
          <AlignRight size={16} />
        </Toggle>
      </ToggleGroup>
    )
  },
}
