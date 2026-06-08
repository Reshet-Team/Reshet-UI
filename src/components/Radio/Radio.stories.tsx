import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { Radio } from './Radio'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <Radio
        items={[
          { value: 'fuji', label: t('radio.fuji') },
          { value: 'gala', label: t('radio.gala') },
          { value: 'granny-smith', label: t('radio.grannySmith') },
        ]}
        legend={t('radio.bestApple')}
        defaultValue='fuji'
      />
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const { t } = useTranslation()
    return (
      <Radio
        items={[
          {
            value: 'starter',
            label: t('radio.starter'),
            description: t('radio.upTo3Projects'),
          },
          {
            value: 'pro',
            label: t('radio.pro'),
            description: t('radio.unlimitedProjects'),
          },
          {
            value: 'enterprise',
            label: t('radio.enterprise'),
            description: t('radio.customLimits'),
          },
        ]}
        legend={t('radio.selectPlan')}
        defaultValue='pro'
      />
    )
  },
}

export const Cards: Story = {
  render: function Cards() {
    const { t } = useTranslation()
    return (
      <Radio
        items={[
          {
            value: 'starter',
            label: t('radio.starter'),
            description: t('radio.upTo3Projects'),
          },
          {
            value: 'pro',
            label: t('radio.pro'),
            description: t('radio.unlimitedProjects'),
          },
          {
            value: 'enterprise',
            label: t('radio.enterprise'),
            description: t('radio.customLimits'),
          },
        ]}
        variant='cards'
        legend={t('radio.selectPlan')}
        defaultValue='pro'
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <Radio
        items={[
          { value: 'fuji', label: t('radio.fuji') },
          { value: 'gala', label: t('radio.gala'), disabled: true },
          { value: 'granny-smith', label: t('radio.grannySmith') },
        ]}
        legend={t('radio.bestApple')}
        defaultValue='fuji'
      />
    )
  },
}

export const DisabledCards: Story = {
  render: function DisabledCards() {
    const { t } = useTranslation()
    return (
      <Radio
        items={[
          {
            value: 'starter',
            label: t('radio.starter'),
            description: t('radio.upTo3Projects'),
          },
          {
            value: 'pro',
            label: t('radio.pro'),
            description: t('radio.unlimitedProjects'),
            disabled: true,
          },
          {
            value: 'enterprise',
            label: t('radio.enterprise'),
            description: t('radio.customLimits'),
          },
        ]}
        variant='cards'
        legend={t('radio.selectPlan')}
        defaultValue='starter'
      />
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
    const appleItems = [
      { value: 'fuji', label: t('radio.fuji') },
      { value: 'gala', label: t('radio.gala') },
      { value: 'granny-smith', label: t('radio.grannySmith') },
    ]
    const planItems = [
      {
        value: 'starter',
        label: t('radio.starter'),
        description: t('radio.upTo3Projects'),
      },
      {
        value: 'pro',
        label: t('radio.pro'),
        description: t('radio.unlimitedProjects'),
      },
      {
        value: 'enterprise',
        label: t('radio.enterprise'),
        description: t('radio.customLimits'),
      },
    ]
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        <Radio items={appleItems} legend={t('radio.normalVariant')} defaultValue='fuji' />
        <Radio
          items={planItems}
          variant='cards'
          legend={t('radio.cardsVariant')}
          defaultValue='pro'
        />
      </div>
    )
  },
}
