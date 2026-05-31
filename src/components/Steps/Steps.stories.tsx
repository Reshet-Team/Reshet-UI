import type { Meta, StoryObj } from '@storybook/react'
import { Check, CreditCard, Package, User } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import {
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsRoot,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from './Steps'

export default {
  title: 'Navigation/Steps',
  component: StepsRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof StepsRoot>

type Story = StoryObj<typeof StepsRoot>

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: function Default() {
    const [step, setStep] = useState(2)
    return (
      <div
        style={{
          width: 480,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep}>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator />
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator />
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          Step {step} content
        </p>
      </div>
    )
  },
}

// ─── With Title ───────────────────────────────────────────────────────────────

export const WithTitle: Story = {
  render: function WithTitle() {
    const [step, setStep] = useState(2)
    const labels: Record<number, string> = {
      1: 'Account info',
      2: 'Payment info',
      3: 'Review',
    }
    return (
      <div
        style={{
          width: 560,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep}>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>Account</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>Payment</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>Review</StepsTitle>
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          {labels[step]}
        </p>
      </div>
    )
  },
}

// ─── With Title & Description ────────────────────────────────────────────────

export const WithTitleAndDescription: Story = {
  render: function WithTitleAndDescription() {
    const [step, setStep] = useState(2)
    const labels: Record<number, string> = {
      1: 'Profile content',
      2: 'Payment Info content',
      3: 'Confirm content',
    }
    return (
      <div
        style={{
          width: 640,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep}>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator />
                <span>
                  <StepsTitle>Profile</StepsTitle>
                  <StepsDescription>Your basic info</StepsDescription>
                </span>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
                <span>
                  <StepsTitle>Payment Info</StepsTitle>
                  <StepsDescription>Billing details</StepsDescription>
                </span>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator />
                <span>
                  <StepsTitle>Confirm</StepsTitle>
                  <StepsDescription>Review your order</StepsDescription>
                </span>
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          {labels[step]}
        </p>
      </div>
    )
  },
}

// ─── Custom Indicators ────────────────────────────────────────────────────────

export const CustomIndicators: Story = {
  render: function CustomIndicators() {
    const [step, setStep] = useState(2)
    return (
      <div
        style={{
          width: 520,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep}>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator>
                  <Check size={14} />
                </StepsIndicator>
                <StepsTitle>Profile</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator>
                  <CreditCard size={14} />
                </StepsIndicator>
                <StepsTitle>Payment</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator>
                  <Package size={14} />
                </StepsIndicator>
                <StepsTitle>Shipping</StepsTitle>
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          Step {step} content
        </p>
      </div>
    )
  },
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: function Controlled() {
    const [step, setStep] = useState(1)
    const total = 3

    return (
      <div
        style={{
          width: 520,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep}>
          <StepsList>
            {Array.from({ length: total }, (_, i) => i + 1).map((s) => (
              <StepsItem key={s} step={s}>
                <StepsTrigger>
                  <StepsIndicator />
                  <StepsTitle>Step {s}</StepsTitle>
                </StepsTrigger>
                {s < total && <StepsSeparator />}
              </StepsItem>
            ))}
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          Step {step} content
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            variant='secondary'
            size='sm'
            disabled={step <= 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            Previous
          </Button>
          <Button
            variant='primary'
            size='sm'
            disabled={step >= total}
            onClick={() => setStep((s) => Math.min(total, s + 1))}
          >
            Next
          </Button>
        </div>
      </div>
    )
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: function States() {
    return (
      <div style={{ width: 520 }}>
        <StepsRoot defaultValue={2}>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator>
                  <Check size={14} />
                </StepsIndicator>
                <StepsTitle>Completed</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>Active</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3} disabled>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>Disabled</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={4}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>Inactive</StepsTitle>
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
      </div>
    )
  },
}

// ─── Vertical ─────────────────────────────────────────────────────────────────

export const Vertical: Story = {
  render: function Vertical() {
    const [step, setStep] = useState(1)
    const total = 4

    return (
      <div
        style={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep} orientation='vertical'>
          <StepsList>
            {Array.from({ length: total }, (_, i) => i + 1).map((s) => (
              <StepsItem key={s} step={s}>
                <StepsTrigger>
                  <StepsIndicator />
                  <StepsTitle>Step {s}</StepsTitle>
                </StepsTrigger>
                {s < total && <StepsSeparator />}
              </StepsItem>
            ))}
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          Step {step} content
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            variant='secondary'
            size='sm'
            disabled={step <= 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            Back
          </Button>
          <Button
            variant='primary'
            size='sm'
            disabled={step >= total}
            onClick={() => setStep((s) => Math.min(total, s + 1))}
          >
            Next
          </Button>
        </div>
      </div>
    )
  },
}

// ─── Vertical With Description ────────────────────────────────────────────────

export const VerticalWithDescription: Story = {
  render: function VerticalWithDescription() {
    const [step, setStep] = useState(2)
    const labels: Record<number, string> = {
      1: 'Profile content',
      2: 'Payment Info content',
      3: 'Confirm content',
    }
    return (
      <div
        style={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        <StepsRoot value={step} onValueChange={setStep} orientation='vertical'>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator>
                  <User size={14} />
                </StepsIndicator>
                <span>
                  <StepsTitle>Profile</StepsTitle>
                  <StepsDescription>Set up your profile</StepsDescription>
                </span>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator>
                  <CreditCard size={14} />
                </StepsIndicator>
                <span>
                  <StepsTitle>Payment Info</StepsTitle>
                  <StepsDescription>Add your billing details</StepsDescription>
                </span>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator>
                  <Check size={14} />
                </StepsIndicator>
                <span>
                  <StepsTitle>Confirm</StepsTitle>
                  <StepsDescription>Review and submit</StepsDescription>
                </span>
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            margin: 0,
          }}
        >
          {labels[step]}
        </p>
      </div>
    )
  },
}
