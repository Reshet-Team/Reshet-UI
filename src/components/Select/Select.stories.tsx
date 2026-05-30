import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import {
  SelectGroup,
  SelectItem,
  SelectList,
  SelectRoot,
  SelectTrigger,
} from './Select'

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
    const t = useT()
    const fruits = [
      { value: 'apple', label: t({ en: 'Apple', he: 'תפוח' }) },
      { value: 'banana', label: t({ en: 'Banana', he: 'בננה' }) },
      { value: 'cherry', label: t({ en: 'Cherry', he: 'דובדבן' }) },
      { value: 'durian', label: t({ en: 'Durian', he: 'דוריאן' }) },
      { value: 'elderberry', label: t({ en: 'Elderberry', he: 'אסמבוסים' }) },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={fruits}>
          <SelectTrigger
            placeholder={t({ en: 'Select a fruit', he: 'בחר פרי' })}
          />
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
    const t = useT()
    const fruits = [
      { value: 'apple', label: t({ en: 'Apple', he: 'תפוח' }) },
      { value: 'banana', label: t({ en: 'Banana', he: 'בננה' }) },
      { value: 'cherry', label: t({ en: 'Cherry', he: 'דובדבן' }) },
      { value: 'durian', label: t({ en: 'Durian', he: 'דוריאן' }) },
      { value: 'elderberry', label: t({ en: 'Elderberry', he: 'אסמבוסים' }) },
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
    const t = useT()
    const fruits = [
      { value: 'apple', label: t({ en: 'Apple', he: 'תפוח' }) },
      { value: 'banana', label: t({ en: 'Banana', he: 'בננה' }) },
      { value: 'cherry', label: t({ en: 'Cherry', he: 'דובדבן' }) },
      { value: 'durian', label: t({ en: 'Durian', he: 'דוריאן' }) },
      { value: 'elderberry', label: t({ en: 'Elderberry', he: 'אסמבוסים' }) },
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
    const t = useT()
    const options = [
      { value: 'apple', label: t({ en: 'Apple', he: 'תפוח' }) },
      { value: 'banana', label: t({ en: 'Banana', he: 'בננה' }) },
      {
        value: 'durian',
        label: t({ en: 'Durian (unavailable)', he: 'דוריאן (לא זמין)' }),
        disabled: true,
      },
      { value: 'cherry', label: t({ en: 'Cherry', he: 'דובדבן' }) },
    ]
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={options}>
          <SelectTrigger
            placeholder={t({ en: 'Select a fruit', he: 'בחר פרי' })}
          />
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
  render: function Sizes() {
    const t = useT()
    const fruits = [
      { value: 'apple', label: t({ en: 'Apple', he: 'תפוח' }) },
      { value: 'banana', label: t({ en: 'Banana', he: 'בננה' }) },
      { value: 'cherry', label: t({ en: 'Cherry', he: 'דובדבן' }) },
      { value: 'durian', label: t({ en: 'Durian', he: 'דוריאן' }) },
      { value: 'elderberry', label: t({ en: 'Elderberry', he: 'אסמבוסים' }) },
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
    const t = useT()
    const produce = [
      {
        label: t({ en: 'Fruits', he: 'פירות' }),
        options: [
          { value: 'apple', label: t({ en: 'Apple', he: 'תפוח' }) },
          { value: 'banana', label: t({ en: 'Banana', he: 'בננה' }) },
          { value: 'cherry', label: t({ en: 'Cherry', he: 'דובדבן' }) },
        ],
      },
      {
        label: t({ en: 'Vegetables', he: 'ירקות' }),
        options: [
          { value: 'carrot', label: t({ en: 'Carrot', he: 'גזר' }) },
          { value: 'lettuce', label: t({ en: 'Lettuce', he: 'חסה' }) },
          { value: 'spinach', label: t({ en: 'Spinach', he: 'תרד' }) },
        ],
      },
    ]
    const flatItems = produce.flatMap((g) => g.options)
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={flatItems}>
          <SelectTrigger
            placeholder={t({ en: 'Select produce', he: 'בחר תוצרת' })}
          />
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
  render: function ManyOptions() {
    const t = useT()
    const options = Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: t({ en: `Option ${i + 1}`, he: `אפשרות ${i + 1}` }),
    }))
    return (
      <div style={{ width: 240 }}>
        <SelectRoot items={options}>
          <SelectTrigger
            placeholder={t({ en: 'Select an option', he: 'בחר אפשרות' })}
          />
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
    const t = useT()
    const currencies = [
      {
        value: 'usd',
        label: t({ en: 'US Dollar', he: 'דולר אמריקאי' }),
        flag: '🇺🇸',
        symbol: '$',
      },
      {
        value: 'eur',
        label: t({ en: 'Euro', he: 'יורו' }),
        flag: '🇪🇺',
        symbol: '€',
      },
      {
        value: 'gbp',
        label: t({ en: 'British Pound', he: 'לירה שטרלינג' }),
        flag: '🇬🇧',
        symbol: '£',
      },
      {
        value: 'jpy',
        label: t({ en: 'Japanese Yen', he: 'ין יפני' }),
        flag: '🇯🇵',
        symbol: '¥',
      },
      {
        value: 'cad',
        label: t({ en: 'Canadian Dollar', he: 'דולר קנדי' }),
        flag: '🇨🇦',
        symbol: 'CA$',
      },
      {
        value: 'aud',
        label: t({ en: 'Australian Dollar', he: 'דולר אוסטרלי' }),
        flag: '🇦🇺',
        symbol: 'A$',
      },
    ]
    return (
      <div style={{ width: 260 }}>
        <SelectRoot items={currencies}>
          <SelectTrigger
            placeholder={t({ en: 'Select currency', he: 'בחר מטבע' })}
          />
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
    const t = useT()
    const plans = [
      {
        value: 'free',
        label: t({ en: 'Free', he: 'חינם' }),
        price: '$0/חודש',
        description: t({
          en: 'For personal projects',
          he: 'לפרויקטים אישיים',
        }),
      },
      {
        value: 'pro',
        label: t({ en: 'Pro', he: 'פרו' }),
        price: '$12/חודש',
        description: t({
          en: 'For professionals & freelancers',
          he: 'לאנשי מקצוע ופרילנסרים',
        }),
      },
      {
        value: 'team',
        label: t({ en: 'Team', he: 'צוות' }),
        price: '$49/חודש',
        description: t({
          en: 'Collaboration for growing teams',
          he: 'שיתוף פעולה לצוותים גדלים',
        }),
      },
      {
        value: 'enterprise',
        label: t({ en: 'Enterprise', he: 'ארגוני' }),
        price: t({ en: 'Custom', he: 'מותאם אישית' }),
        description: t({
          en: 'Dedicated support & SLA',
          he: 'תמיכה ייעודית ו-SLA',
        }),
      },
    ]
    return (
      <div style={{ width: 300 }}>
        <SelectRoot items={plans}>
          <SelectTrigger
            placeholder={t({ en: 'Choose a plan', he: 'בחר תוכנית' })}
          />
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

export const ObjectValues: Story = {
  render: function ObjectValues() {
    const t = useT()
    const users: User[] = [
      {
        id: 'u1',
        name: 'Alice Kim',
        role: t({ en: 'Design', he: 'עיצוב' }),
        initials: 'AK',
      },
      {
        id: 'u2',
        name: 'Ben Torres',
        role: t({ en: 'Engineering', he: 'הנדסה' }),
        initials: 'BT',
      },
      {
        id: 'u3',
        name: 'Chen Wei',
        role: t({ en: 'Product', he: 'מוצר' }),
        initials: 'CW',
      },
      {
        id: 'u4',
        name: 'Dana Frost',
        role: t({ en: 'Marketing', he: 'שיווק' }),
        initials: 'DF',
      },
      {
        id: 'u5',
        name: 'Eli Park',
        role: t({ en: 'Design', he: 'עיצוב' }),
        initials: 'EP',
      },
    ]
    return (
      <div style={{ width: 300 }}>
        <SelectRoot>
          <SelectTrigger>
            {(user: User | null) =>
              user
                ? `${user.name} · ${user.role}`
                : t({ en: 'Assign to…', he: 'הקצה ל...' })
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
    )
  },
}
