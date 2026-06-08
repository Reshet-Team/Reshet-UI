import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { Slider } from './Slider'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return <Slider label={t('slider.volume')} defaultValue={25} />
  },
}

export const WithValue: Story = {
  render: function WithValue() {
    const { t } = useTranslation()
    return <Slider label={t('slider.brightness')} defaultValue={60} />
  },
}

export const Range: Story = {
  render: function Range() {
    const { t } = useTranslation()
    return <Slider label={t('slider.priceRange')} defaultValue={[20, 80]} />
  },
}

export const NoLabel: Story = {
  args: {
    defaultValue: 40,
    showValue: false,
  },
}

export const Steps: Story = {
  render: function Steps() {
    const { t } = useTranslation()
    return (
      <Slider
        label={t('slider.rating')}
        defaultValue={3}
        min={1}
        max={5}
        step={1}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return <Slider label={t('common.disabled')} defaultValue={40} disabled />
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
        <Slider label={t('common.default')} defaultValue={30} />
        <Slider label={t('slider.range')} defaultValue={[20, 70]} />
        <Slider
          label={t('slider.stepsLabel')}
          defaultValue={3}
          min={1}
          max={5}
          step={1}
        />
        <Slider
          label={t('slider.noValueDisplay')}
          defaultValue={50}
          showValue={false}
        />
        <Slider label={t('common.disabled')} defaultValue={40} disabled />
      </div>
    )
  },
}
