import type { Meta, StoryObj } from '@storybook/react'
import {
  SelectRoot,
  SelectTrigger,
  SelectList,
  SelectItem,
  SelectGroup,
} from './Select'

export default {
  title: 'Components/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectRoot>

type Story = StoryObj<typeof SelectRoot>

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian' },
  { value: 'elderberry', label: 'Elderberry' },
]

export const Default: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <SelectRoot items={fruits}>
        <SelectTrigger placeholder='Select a fruit' />
        <SelectList items={fruits}>
          {(fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          )}
        </SelectList>
      </SelectRoot>
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
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
  ),
}

export const Disabled: Story = {
  render: () => (
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
  ),
}

export const WithDisabledItem: Story = {
  render: () => {
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'durian', label: 'Durian (unavailable)', disabled: true },
      { value: 'cherry', label: 'Cherry' },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={options}>
          <SelectTrigger placeholder='Select a fruit' />
          <SelectList items={options}>
            {(fruit) => (
              <SelectItem
                key={fruit.value}
                value={fruit.value}
                disabled={fruit.disabled}
              >
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
  render: () => (
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
  ),
}

export const Grouped: Story = {
  render: () => {
    const produce = [
      {
        label: 'Fruits',
        options: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'cherry', label: 'Cherry' },
        ],
      },
      {
        label: 'Vegetables',
        options: [
          { value: 'carrot', label: 'Carrot' },
          { value: 'lettuce', label: 'Lettuce' },
          { value: 'spinach', label: 'Spinach' },
        ],
      },
    ]
    const flatItems = produce.flatMap((g) => g.options)
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={flatItems}>
          <SelectTrigger placeholder='Select produce' />
          <SelectList items={produce}>
            {(group) => (
              <SelectGroup
                key={group.label}
                label={group.label}
                items={group.options}
              >
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
  render: () => {
    const options = Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    }))
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={options}>
          <SelectTrigger placeholder='Select an option' />
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
  render: () => {
    const currencies = [
      { value: 'usd', label: 'US Dollar', flag: '🇺🇸', symbol: '$' },
      { value: 'eur', label: 'Euro', flag: '🇪🇺', symbol: '€' },
      { value: 'gbp', label: 'British Pound', flag: '🇬🇧', symbol: '£' },
      { value: 'jpy', label: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
      { value: 'cad', label: 'Canadian Dollar', flag: '🇨🇦', symbol: 'CA$' },
      { value: 'aud', label: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$' },
    ]
    return (
      <div style={{ width: 260 }}>
        <SelectRoot items={currencies}>
          <SelectTrigger placeholder='Select currency' />
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
  render: () => {
    const plans = [
      {
        value: 'free',
        label: 'Free',
        price: '$0/mo',
        description: 'For personal projects',
      },
      {
        value: 'pro',
        label: 'Pro',
        price: '$12/mo',
        description: 'For professionals & freelancers',
      },
      {
        value: 'team',
        label: 'Team',
        price: '$49/mo',
        description: 'Collaboration for growing teams',
      },
      {
        value: 'enterprise',
        label: 'Enterprise',
        price: 'Custom',
        description: 'Dedicated support & SLA',
      },
    ]
    return (
      <div style={{ width: 300 }}>
        <SelectRoot items={plans}>
          <SelectTrigger placeholder='Choose a plan' />
          <SelectList items={plans}>
            {(plan) => (
              <SelectItem
                key={plan.value}
                value={plan.value}
                style={{ alignItems: 'flex-start' }}
              >
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

const users: User[] = [
  { id: 'u1', name: 'Alice Kim', role: 'Design', initials: 'AK' },
  { id: 'u2', name: 'Ben Torres', role: 'Engineering', initials: 'BT' },
  { id: 'u3', name: 'Chen Wei', role: 'Product', initials: 'CW' },
  { id: 'u4', name: 'Dana Frost', role: 'Marketing', initials: 'DF' },
  { id: 'u5', name: 'Eli Park', role: 'Design', initials: 'EP' },
]

export const ObjectValues: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <SelectRoot>
        <SelectTrigger>
          {(user: User | null) =>
            user ? `${user.name} · ${user.role}` : 'Assign to…'
          }
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
  ),
}
