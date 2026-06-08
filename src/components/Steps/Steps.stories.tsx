import type { Meta, StoryObj } from '@storybook/react'
import { Check, CreditCard, Package, User } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
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
          {t('steps.stepContent', { step })}
        </p>
      </div>
    )
  },
}

export const WithTitle: Story = {
  render: function WithTitle() {
    const { t } = useTranslation()
    const [step, setStep] = useState(2)
    const labels: Record<number, string> = {
      1: t('steps.accountInfo'),
      2: t('steps.paymentInfoContent'),
      3: t('steps.review'),
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
                <StepsTitle>{t('steps.account')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>{t('steps.payment')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>{t('steps.review')}</StepsTitle>
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

export const WithTitleAndDescription: Story = {
  render: function WithTitleAndDescription() {
    const { t } = useTranslation()
    const [step, setStep] = useState(2)
    const labels: Record<number, string> = {
      1: t('steps.profileContent'),
      2: t('steps.paymentInfoContent'),
      3: t('steps.confirmContent'),
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
                  <StepsTitle>{t('steps.profile')}</StepsTitle>
                  <StepsDescription>{t('steps.yourBasicInfo')}</StepsDescription>
                </span>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
                <span>
                  <StepsTitle>{t('steps.paymentInfo')}</StepsTitle>
                  <StepsDescription>{t('steps.billingDetails')}</StepsDescription>
                </span>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator />
                <span>
                  <StepsTitle>{t('steps.confirm')}</StepsTitle>
                  <StepsDescription>{t('steps.reviewYourOrder')}</StepsDescription>
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

export const CustomIndicators: Story = {
  render: function CustomIndicators() {
    const { t } = useTranslation()
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
                <StepsTitle>{t('steps.profile')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator>
                  <CreditCard size={14} />
                </StepsIndicator>
                <StepsTitle>{t('steps.payment')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3}>
              <StepsTrigger>
                <StepsIndicator>
                  <Package size={14} />
                </StepsIndicator>
                <StepsTitle>{t('steps.shipping')}</StepsTitle>
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
          {t('steps.stepContent', { step })}
        </p>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: function Controlled() {
    const { t } = useTranslation()
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
                  <StepsTitle>{t('steps.stepN', { n: s })}</StepsTitle>
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
          {t('steps.stepContent', { step })}
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            variant='secondary'
            size='sm'
            disabled={step <= 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            {t('steps.previous')}
          </Button>
          <Button
            variant='primary'
            size='sm'
            disabled={step >= total}
            onClick={() => setStep((s) => Math.min(total, s + 1))}
          >
            {t('steps.next')}
          </Button>
        </div>
      </div>
    )
  },
}

export const States: Story = {
  render: function States() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 520 }}>
        <StepsRoot defaultValue={2}>
          <StepsList>
            <StepsItem step={1}>
              <StepsTrigger>
                <StepsIndicator>
                  <Check size={14} />
                </StepsIndicator>
                <StepsTitle>{t('steps.completed')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={2}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>{t('steps.active')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={3} disabled>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>{t('common.disabled')}</StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
            <StepsItem step={4}>
              <StepsTrigger>
                <StepsIndicator />
                <StepsTitle>{t('steps.inactive')}</StepsTitle>
              </StepsTrigger>
            </StepsItem>
          </StepsList>
        </StepsRoot>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function Vertical() {
    const { t } = useTranslation()
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
                  <StepsTitle>{t('steps.stepN', { n: s })}</StepsTitle>
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
          {t('steps.stepContent', { step })}
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            variant='secondary'
            size='sm'
            disabled={step <= 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            {t('steps.back')}
          </Button>
          <Button
            variant='primary'
            size='sm'
            disabled={step >= total}
            onClick={() => setStep((s) => Math.min(total, s + 1))}
          >
            {t('steps.next')}
          </Button>
        </div>
      </div>
    )
  },
}

export const VerticalWithDescription: Story = {
  render: function VerticalWithDescription() {
    const { t } = useTranslation()
    const [step, setStep] = useState(2)
    const labels: Record<number, string> = {
      1: t('steps.profileContent'),
      2: t('steps.paymentInfoContent'),
      3: t('steps.confirmContent'),
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
                  <StepsTitle>{t('steps.profile')}</StepsTitle>
                  <StepsDescription>{t('steps.setUpProfile')}</StepsDescription>
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
                  <StepsTitle>{t('steps.paymentInfo')}</StepsTitle>
                  <StepsDescription>{t('steps.addBillingDetails')}</StepsDescription>
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
                  <StepsTitle>{t('steps.confirm')}</StepsTitle>
                  <StepsDescription>{t('steps.reviewAndSubmit')}</StepsDescription>
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
