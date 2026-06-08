import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { SelectGroup, SelectItem, SelectList, SelectRoot, SelectTrigger } from './Select'

export default {
  title: 'Inputs/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectRoot>

type Story = StoryObj<typeof SelectRoot>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    const fruits = [
      { value: 'apple', label: t('fruits.apple') },
      { value: 'banana', label: t('fruits.banana') },
      { value: 'cherry', label: t('fruits.cherry') },
      { value: 'durian', label: t('fruits.durian') },
      { value: 'elderberry', label: t('fruits.elderberry') },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={fruits}>
          <SelectTrigger placeholder={t('select.selectFruit')} />
          <SelectList items={fruits}>
            {(fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const WithDefaultValue: Story = {
  render: function WithDefaultValue() {
    const { t } = useTranslation()
    const fruits = [
      { value: 'apple', label: t('fruits.apple') },
      { value: 'banana', label: t('fruits.banana') },
      { value: 'cherry', label: t('fruits.cherry') },
      { value: 'durian', label: t('fruits.durian') },
      { value: 'elderberry', label: t('fruits.elderberry') },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={fruits} defaultValue='banana'>
          <SelectTrigger />
          <SelectList items={fruits}>
            {(fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    const fruits = [
      { value: 'apple', label: t('fruits.apple') },
      { value: 'banana', label: t('fruits.banana') },
      { value: 'cherry', label: t('fruits.cherry') },
      { value: 'durian', label: t('fruits.durian') },
      { value: 'elderberry', label: t('fruits.elderberry') },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={fruits} defaultValue='apple' disabled>
          <SelectTrigger />
          <SelectList items={fruits}>
            {(fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const WithDisabledItem: Story = {
  render: function WithDisabledItem() {
    const { t } = useTranslation()
    const options = [
      { value: 'apple', label: t('fruits.apple') },
      { value: 'banana', label: t('fruits.banana') },
      {
        value: 'durian',
        label: t('select.durianUnavailable'),
        disabled: true,
      },
      { value: 'cherry', label: t('fruits.cherry') },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={options}>
          <SelectTrigger placeholder={t('select.selectFruit')} />
          <SelectList items={options}>
            {(fruit) => (
              <SelectItem key={fruit.value} value={fruit.value} disabled={fruit.disabled}>
                {fruit.label}
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const { t } = useTranslation()
    const fruits = [
      { value: 'apple', label: t('fruits.apple') },
      { value: 'banana', label: t('fruits.banana') },
      { value: 'cherry', label: t('fruits.cherry') },
      { value: 'durian', label: t('fruits.durian') },
      { value: 'elderberry', label: t('fruits.elderberry') },
    ]
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          width: 240,
        }}
      >
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <SelectRoot key={size} items={fruits}>
            <SelectTrigger size={size} placeholder={size.toUpperCase()} />
            <SelectList items={fruits}>
              {(fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </SelectItem>
              )}
            </SelectList>
          </SelectRoot>
        ))}
      </div>
    )
  },
}

export const Grouped: Story = {
  render: function Grouped() {
    const { t } = useTranslation()
    const produce = [
      {
        label: t('produce.fruits'),
        options: [
          { value: 'apple', label: t('fruits.apple') },
          { value: 'banana', label: t('fruits.banana') },
          { value: 'cherry', label: t('fruits.cherry') },
        ],
      },
      {
        label: t('produce.vegetables'),
        options: [
          { value: 'carrot', label: t('produce.carrot') },
          { value: 'lettuce', label: t('produce.lettuce') },
          { value: 'spinach', label: t('produce.spinach') },
        ],
      },
    ]
    const flatItems = produce.flatMap((g) => g.options)
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={flatItems}>
          <SelectTrigger placeholder={t('select.selectProduce')} />
          <SelectList items={produce}>
            {(group) => (
              <SelectGroup key={group.label} label={group.label} items={group.options}>
                {(opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                )}
              </SelectGroup>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const ManyOptions: Story = {
  render: function ManyOptions() {
    const { t } = useTranslation()
    const options = Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: t('select.optionN', { n: i + 1 }),
    }))
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={options}>
          <SelectTrigger placeholder={t('select.selectAnOption')} />
          <SelectList items={options}>
            {(opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: function WithIcons() {
    const { t } = useTranslation()
    const currencies = [
      {
        value: 'usd',
        label: t('select.usDollar'),
        flag: '🇺🇸',
        symbol: '$',
      },
      {
        value: 'eur',
        label: t('select.euro'),
        flag: '🇪🇺',
        symbol: '€',
      },
      {
        value: 'gbp',
        label: t('select.britishPound'),
        flag: '🇬🇧',
        symbol: '£',
      },
      {
        value: 'jpy',
        label: t('select.japaneseYen'),
        flag: '🇯🇵',
        symbol: '¥',
      },
      {
        value: 'cad',
        label: t('select.canadianDollar'),
        flag: '🇨🇦',
        symbol: 'CA$',
      },
      {
        value: 'aud',
        label: t('select.australianDollar'),
        flag: '🇦🇺',
        symbol: 'A$',
      },
    ]
    return (
      <div style={{ width: 260 }}>
        <SelectRoot items={currencies}>
          <SelectTrigger placeholder={t('select.selectCurrency')} />
          <SelectList items={currencies}>
            {(currency) => (
              <SelectItem key={currency.value} value={currency.value}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                >
                  <span aria-hidden>{currency.flag}</span>
                  <span>{currency.label}</span>
                  <span
                    style={{
                      marginInlineStart: 'auto',
                      color: 'var(--color-fg-subtle)',
                      fontSize: 'var(--font-size-sm)',
                    }}
                  >
                    {currency.symbol}
                  </span>
                </span>
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const { t } = useTranslation()
    const plans = [
      {
        value: 'free',
        label: t('select.free'),
        price: '$0/mo',
        description: t('select.forPersonalProjects'),
      },
      {
        value: 'pro',
        label: t('select.pro'),
        price: '$12/mo',
        description: t('select.forProfessionals'),
      },
      {
        value: 'team',
        label: t('menu.team'),
        price: '$49/mo',
        description: t('select.collaborationTeams'),
      },
      {
        value: 'enterprise',
        label: t('select.enterprise'),
        price: t('select.custom'),
        description: t('select.dedicatedSupport'),
      },
    ]
    return (
      <div style={{ width: 300 }}>
        <SelectRoot items={plans}>
          <SelectTrigger placeholder={t('select.choosePlan')} />
          <SelectList items={plans}>
            {(plan) => (
              <SelectItem key={plan.value} value={plan.value} style={{ alignItems: 'flex-start' }}>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-1)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: 'var(--space-3)',
                    }}
                  >
                    <span>{plan.label}</span>
                    <span
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 500,
                        color: 'var(--color-fg)',
                        flexShrink: 0,
                      }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-fg-subtle)',
                    }}
                  >
                    {plan.description}
                  </span>
                </div>
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}

type User = {
  id: string
  name: string
  role: string
  initials: string
}

export const ObjectValues: Story = {
  render: function ObjectValues() {
    const { t } = useTranslation()
    const users: User[] = [
      {
        id: 'u1',
        name: 'Alice Kim',
        role: t('menu.design'),
        initials: 'AK',
      },
      {
        id: 'u2',
        name: 'Ben Torres',
        role: t('menu.engineering'),
        initials: 'BT',
      },
      {
        id: 'u3',
        name: 'Chen Wei',
        role: t('menu.product'),
        initials: 'CW',
      },
      {
        id: 'u4',
        name: 'Dana Frost',
        role: t('menu.marketing'),
        initials: 'DF',
      },
      {
        id: 'u5',
        name: 'Eli Park',
        role: t('menu.design'),
        initials: 'EP',
      },
    ]
    return (
      <div style={{ width: 300 }}>
        <SelectRoot>
          <SelectTrigger>
            {(user: User | null) => (user ? `${user.name} · ${user.role}` : t('select.assignTo'))}
          </SelectTrigger>
          <SelectList items={users}>
            {(user) => (
              <SelectItem key={user.id} value={user}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      color: 'var(--color-primary-fg)',
                      fontSize: 10,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {user.initials}
                  </span>
                  {user.name}
                  <span
                    style={{
                      color: 'var(--color-icon-subtle)',
                      fontSize: 'var(--font-size-sm)',
                    }}
                  >
                    · {user.role}
                  </span>
                </span>
              </SelectItem>
            )}
          </SelectList>
        </SelectRoot>
      </div>
    )
  },
}
