import type { Meta, StoryObj } from '@storybook/react'
import { NumberField } from './NumberField'

export default {
  title: 'Components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberField>

type Story = StoryObj<typeof NumberField>

export const Default: Story = {
  render: () => <NumberField defaultValue={0} />,
}

export const WithMinMax: Story = {
  render: () => <NumberField defaultValue={5} min={0} max={10} />,
}

export const WithStep: Story = {
  render: () => <NumberField defaultValue={0} step={0.5} />,
}

export const Disabled: Story = {
  render: () => <NumberField defaultValue={42} disabled />,
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: 200,
      }}
    >
      <NumberField size='sm' defaultValue={0} />
      <NumberField size='md' defaultValue={0} />
      <NumberField size='lg' defaultValue={0} />
    </div>
  ),
}

export const NoSteppers: Story = {
  render: () => <NumberField defaultValue={0} hideSteppers />,
}

export const Integer: Story = {
  render: () => (
    <NumberField defaultValue={42} format={{ maximumFractionDigits: 0 }} />
  ),
}

export const Decimal: Story = {
  render: () => (
    <NumberField
      defaultValue={3.14}
      step={0.01}
      format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
    />
  ),
}

export const Currency: Story = {
  render: () => (
    <NumberField
      defaultValue={1299}
      step={1}
      format={{ style: 'currency', currency: 'USD' }}
    />
  ),
}

export const Percentage: Story = {
  render: () => (
    <NumberField
      defaultValue={0.42}
      step={0.01}
      min={0}
      max={1}
      format={{ style: 'percent', maximumFractionDigits: 0 }}
    />
  ),
}

export const Unit: Story = {
  render: () => (
    <NumberField
      defaultValue={72}
      format={{ style: 'unit', unit: 'kilogram', unitDisplay: 'short' }}
    />
  ),
}

export const Formatting: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: 220,
      }}
    >
      <NumberField defaultValue={42} format={{ maximumFractionDigits: 0 }} />
      <NumberField
        defaultValue={3.14}
        step={0.01}
        format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
      />
      <NumberField
        defaultValue={1299}
        step={1}
        format={{ style: 'currency', currency: 'USD' }}
      />
      <NumberField
        defaultValue={0.42}
        step={0.01}
        min={0}
        max={1}
        format={{ style: 'percent', maximumFractionDigits: 0 }}
      />
      <NumberField
        defaultValue={72}
        format={{ style: 'unit', unit: 'kilogram', unitDisplay: 'short' }}
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
        gap: 'var(--space-3)',
        maxWidth: 200,
      }}
    >
      <NumberField defaultValue={0} />
      <NumberField defaultValue={0} hideSteppers />
      <NumberField defaultValue={5} min={0} max={10} />
      <NumberField defaultValue={0} step={0.5} />
      <NumberField defaultValue={42} disabled />
    </div>
  ),
}
