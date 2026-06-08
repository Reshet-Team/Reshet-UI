import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import {
  CheckboxGroupItem,
  CheckboxGroupRoot,
  CheckboxGroupSelectAll,
} from './CheckboxGroup'

export default {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroupRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckboxGroupRoot>

type Story = StoryObj<typeof CheckboxGroupRoot>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <CheckboxGroupRoot
        legend={t('checkboxGroup.favouriteApples')}
        defaultValue={['fuji']}
      >
        <CheckboxGroupItem value='fuji'>
          {t('checkboxGroup.fuji')}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>
          {t('checkboxGroup.gala')}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>
          {t('checkboxGroup.grannySmith')}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const { t } = useTranslation()
    return (
      <CheckboxGroupRoot
        legend={t('checkboxGroup.permissions')}
        defaultValue={['read']}
      >
        <CheckboxGroupItem
          value='read'
          description={t('checkboxGroup.readDesc')}
        >
          {t('checkboxGroup.read')}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='write'
          description={t('checkboxGroup.writeDesc')}
        >
          {t('checkboxGroup.write')}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='delete'
          description={t('checkboxGroup.deleteDesc')}
        >
          {t('checkboxGroup.delete')}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='admin'
          description={t('checkboxGroup.adminDesc')}
          disabled
        >
          {t('checkboxGroup.admin')}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const WithSelectAllAndDescriptions: Story = {
  render: function WithSelectAllAndDescriptions() {
    const { t } = useTranslation()
    return (
      <CheckboxGroupRoot
        legend={t('checkboxGroup.permissions')}
        defaultValue={['read', 'write']}
        allValues={['read', 'write', 'delete', 'admin']}
      >
        <CheckboxGroupSelectAll>
          {t('checkboxGroup.selectAll')}
        </CheckboxGroupSelectAll>
        <CheckboxGroupItem
          value='read'
          description={t('checkboxGroup.readDesc')}
        >
          {t('checkboxGroup.read')}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='write'
          description={t('checkboxGroup.writeDesc')}
        >
          {t('checkboxGroup.write')}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='delete'
          description={t('checkboxGroup.deleteDesc')}
        >
          {t('checkboxGroup.delete')}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='admin'
          description={t('checkboxGroup.adminDesc')}
          disabled
        >
          {t('checkboxGroup.admin')}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const WithSelectAll: Story = {
  render: function WithSelectAll() {
    const { t } = useTranslation()
    return (
      <CheckboxGroupRoot
        legend={t('checkboxGroup.selectApples')}
        defaultValue={['fuji', 'gala']}
        allValues={['fuji', 'gala', 'granny-smith']}
      >
        <CheckboxGroupSelectAll>
          {t('checkboxGroup.selectAll')}
        </CheckboxGroupSelectAll>
        <CheckboxGroupItem value='fuji'>
          {t('checkboxGroup.fuji')}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>
          {t('checkboxGroup.gala')}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>
          {t('checkboxGroup.grannySmith')}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <CheckboxGroupRoot
        legend={t('checkboxGroup.disabledGroup')}
        defaultValue={['fuji']}
        disabled
      >
        <CheckboxGroupItem value='fuji'>
          {t('checkboxGroup.fuji')}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>
          {t('checkboxGroup.gala')}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>
          {t('checkboxGroup.grannySmith')}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
        }}
      >
        <CheckboxGroupRoot
          legend={t('common.small')}
          size='sm'
          defaultValue={['fuji']}
        >
          <CheckboxGroupItem value='fuji'>
            {t('checkboxGroup.fuji')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t('checkboxGroup.gala')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t('checkboxGroup.grannySmith')}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t('common.medium')}
          size='md'
          defaultValue={['fuji']}
        >
          <CheckboxGroupItem value='fuji'>
            {t('checkboxGroup.fuji')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t('checkboxGroup.gala')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t('checkboxGroup.grannySmith')}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t('common.large')}
          size='lg'
          defaultValue={['fuji']}
        >
          <CheckboxGroupItem value='fuji'>
            {t('checkboxGroup.fuji')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t('checkboxGroup.gala')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t('checkboxGroup.grannySmith')}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        <CheckboxGroupRoot legend={t('empty.basic')} defaultValue={['gala']}>
          <CheckboxGroupItem value='fuji'>
            {t('checkboxGroup.fuji')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t('checkboxGroup.gala')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t('checkboxGroup.grannySmith')}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t('checkboxGroup.withDescriptions')}
          defaultValue={['read', 'write']}
        >
          <CheckboxGroupItem
            value='read'
            description={t('checkboxGroup.readDesc')}
          >
            {t('checkboxGroup.read')}
          </CheckboxGroupItem>
          <CheckboxGroupItem
            value='write'
            description={t('checkboxGroup.writeDesc')}
          >
            {t('checkboxGroup.write')}
          </CheckboxGroupItem>
          <CheckboxGroupItem
            value='delete'
            description={t('checkboxGroup.deleteDesc')}
          >
            {t('checkboxGroup.delete')}
          </CheckboxGroupItem>
          <CheckboxGroupItem
            value='admin'
            description={t('checkboxGroup.adminDesc')}
            disabled
          >
            {t('checkboxGroup.admin')}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t('checkboxGroup.withSelectAll')}
          defaultValue={['fuji']}
          allValues={['fuji', 'gala', 'granny-smith']}
        >
          <CheckboxGroupSelectAll>
            {t('checkboxGroup.selectAll')}
          </CheckboxGroupSelectAll>
          <CheckboxGroupItem value='fuji'>
            {t('checkboxGroup.fuji')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t('checkboxGroup.gala')}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t('checkboxGroup.grannySmith')}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
      </div>
    )
  },
}
