import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

export default {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider label='Volume' defaultValue={25} />
    </div>
  ),
}

export const Secondary: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider label='Brightness' defaultValue={60} />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider label='Price range' defaultValue={[20, 80]} />
    </div>
  ),
}

export const NoLabel: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider defaultValue={40} showValue={false} />
    </div>
  ),
}

export const Steps: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider label='Rating' defaultValue={3} min={1} max={5} step={1} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider label='Disabled' defaultValue={40} disabled />
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
        width: 320,
      }}
    >
      <Slider label='Default' defaultValue={30} />
      <Slider label='Range' defaultValue={[20, 70]} />
      <Slider label='Steps (1–5)' defaultValue={3} min={1} max={5} step={1} />
      <Slider label='No value display' defaultValue={50} showValue={false} />
      <Slider label='Disabled' defaultValue={40} disabled />
    </div>
  ),
}
