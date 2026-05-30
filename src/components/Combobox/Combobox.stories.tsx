import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { useT } from '../../../.storybook/locale'
import {
  ComboboxChip,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxMultiInput,
  ComboboxRoot,
} from './Combobox'

export default {
  title: 'Inputs/Combobox',
  component: ComboboxRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ComboboxRoot>

type Story = StoryObj<typeof ComboboxRoot>

// ─── Team members (shared, no localization needed) ────────────────────────────

interface TeamMember {
  id: number
  name: string
  role: string
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Alice Johnson', role: 'Engineering' },
  { id: 2, name: 'Bob Smith', role: 'Design' },
  { id: 3, name: 'Carol White', role: 'Product' },
  { id: 4, name: 'Dan Brown', role: 'Engineering' },
  { id: 5, name: 'Eva Green', role: 'Marketing' },
  { id: 6, name: 'Frank Lee', role: 'Design' },
  { id: 7, name: 'Grace Kim', role: 'Engineering' },
  { id: 8, name: 'Henry Park', role: 'Product' },
]

function MemberItem({ member }: { member: TeamMember }) {
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        gap: 'var(--space-2)',
      }}
    >
      <span>{member.name}</span>
      <span
        style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-fg-subtle)',
          flexShrink: 0,
        }}
      >
        {member.role}
      </span>
    </span>
  )
}

// ─── Countries (no localization — internationally recognized names) ───────────

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Bolivia',
  'Brazil',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Croatia',
  'Czech Republic',
  'Denmark',
  'Egypt',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'India',
  'Indonesia',
  'Iran',
  'Ireland',
  'Israel',
  'Italy',
  'Japan',
  'Jordan',
  'Kenya',
  'South Korea',
  'Malaysia',
  'Mexico',
  'Morocco',
  'Netherlands',
  'New Zealand',
  'Nigeria',
  'Norway',
  'Pakistan',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'South Africa',
  'Spain',
  'Sweden',
  'Switzerland',
  'Thailand',
  'Turkey',
  'Ukraine',
  'United Kingdom',
  'United States',
  'Venezuela',
  'Vietnam',
]

// ─── Localized fruit hook ──────────────────────────────────────────────────────

function useFruits() {
  const t = useT()
  return [
    t({ en: 'Apple', he: 'תפוח' }),
    t({ en: 'Apricot', he: 'משמש' }),
    t({ en: 'Banana', he: 'בננה' }),
    t({ en: 'Blueberry', he: 'אוכמניות' }),
    t({ en: 'Cherry', he: 'דובדבן' }),
    t({ en: 'Durian', he: 'דוריאן' }),
    t({ en: 'Elderberry', he: 'אסמבוסים' }),
    t({ en: 'Fig', he: 'תאנה' }),
    t({ en: 'Grape', he: 'ענבים' }),
    t({ en: 'Kiwi', he: 'קיווי' }),
    t({ en: 'Lemon', he: 'לימון' }),
    t({ en: 'Mango', he: 'מנגו' }),
    t({ en: 'Orange', he: 'תפוז' }),
    t({ en: 'Papaya', he: 'פפאיה' }),
    t({ en: 'Peach', he: 'אפרסק' }),
    t({ en: 'Pear', he: 'אגס' }),
    t({ en: 'Pineapple', he: 'אננס' }),
    t({ en: 'Plum', he: 'שזיף' }),
    t({ en: 'Raspberry', he: 'פטל' }),
    t({ en: 'Strawberry', he: 'תות' }),
  ]
}

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: function Default() {
    const t = useT()
    const fruits = useFruits()
    return (
      <div style={{ width: 240 }}>
        <ComboboxRoot items={fruits}>
          <ComboboxInput
            placeholder={t({ en: 'Choose a fruit…', he: 'בחר פרי…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── With default value ───────────────────────────────────────────────────────

export const WithDefaultValue: Story = {
  render: function WithDefaultValue() {
    const t = useT()
    const fruits = useFruits()
    const mango = t({ en: 'Mango', he: 'מנגו' })
    return (
      <div style={{ width: 240 }}>
        <ComboboxRoot items={fruits} defaultValue={mango}>
          <ComboboxInput
            placeholder={t({ en: 'Choose a fruit…', he: 'בחר פרי…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: function Sizes() {
    const t = useT()
    const fruits = useFruits()
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
          <ComboboxRoot key={size} items={fruits}>
            <ComboboxInput
              size={size}
              placeholder={t({
                en: `${size.toUpperCase()} — choose a fruit`,
                he: `${size.toUpperCase()} — בחר פרי`,
              })}
            />
            <ComboboxList>
              {(fruit: string) => (
                <ComboboxItem key={fruit} value={fruit}>
                  {fruit}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxRoot>
        ))}
      </div>
    )
  },
}

// ─── Grouped ─────────────────────────────────────────────────────────────────

export const Grouped: Story = {
  render: function Grouped() {
    const t = useT()
    const produce = [
      {
        value: t({ en: 'Fruits', he: 'פירות' }),
        items: [
          t({ en: 'Apple', he: 'תפוח' }),
          t({ en: 'Banana', he: 'בננה' }),
          t({ en: 'Cherry', he: 'דובדבן' }),
          t({ en: 'Grape', he: 'ענבים' }),
          t({ en: 'Mango', he: 'מנגו' }),
          t({ en: 'Orange', he: 'תפוז' }),
        ],
      },
      {
        value: t({ en: 'Vegetables', he: 'ירקות' }),
        items: [
          t({ en: 'Broccoli', he: 'ברוקולי' }),
          t({ en: 'Carrot', he: 'גזר' }),
          t({ en: 'Cucumber', he: 'מלפפון' }),
          t({ en: 'Lettuce', he: 'חסה' }),
          t({ en: 'Spinach', he: 'תרד' }),
          t({ en: 'Tomato', he: 'עגבנייה' }),
        ],
      },
      {
        value: t({ en: 'Herbs', he: 'עשבי תיבול' }),
        items: [
          t({ en: 'Basil', he: 'בזיליקום' }),
          t({ en: 'Chive', he: 'עירית' }),
          t({ en: 'Cilantro', he: 'כוסברה' }),
          t({ en: 'Dill', he: 'שמיר' }),
          t({ en: 'Mint', he: 'נענע' }),
          t({ en: 'Thyme', he: 'תימין' }),
        ],
      },
    ]
    return (
      <div style={{ width: 240 }}>
        <ComboboxRoot items={produce}>
          <ComboboxInput
            placeholder={t({ en: 'Search produce…', he: 'חפש תוצרת…' })}
          />
          <ComboboxList>
            {(group: (typeof produce)[0]) => (
              <ComboboxGroup
                key={group.value}
                label={group.value}
                items={group.items}
              >
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Multiple select ──────────────────────────────────────────────────────────

export const Multiple: Story = {
  render: function Multiple() {
    const t = useT()
    const fruits = useFruits()
    const apple = t({ en: 'Apple', he: 'תפוח' })
    const mango = t({ en: 'Mango', he: 'מנגו' })
    return (
      <div style={{ width: 300 }}>
        <ComboboxRoot multiple items={fruits} defaultValue={[apple, mango]}>
          <ComboboxMultiInput<string>
            placeholder={t({ en: 'Add fruits…', he: 'הוסף פירות…' })}
          >
            {(item) => (
              <ComboboxChip
                key={item}
                chipRemoveProps={{
                  'aria-label': t({ en: `Remove ${item}`, he: `הסר ${item}` }),
                }}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {item}
              </ComboboxChip>
            )}
          </ComboboxMultiInput>
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Multiple select (default chips) ─────────────────────────────────────────

export const MultipleDefault: Story = {
  render: function MultipleDefault() {
    const t = useT()
    const fruits = useFruits()
    const apple = t({ en: 'Apple', he: 'תפוח' })
    const mango = t({ en: 'Mango', he: 'מנגו' })
    return (
      <div style={{ width: 300 }}>
        <ComboboxRoot multiple items={fruits} defaultValue={[apple, mango]}>
          <ComboboxMultiInput
            placeholder={t({ en: 'Add fruits…', he: 'הוסף פירות…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    const fruits = useFruits()
    const cherry = t({ en: 'Cherry', he: 'דובדבן' })
    return (
      <div style={{ width: 240 }}>
        <ComboboxRoot items={fruits} defaultValue={cherry} disabled>
          <ComboboxInput
            placeholder={t({ en: 'Choose a fruit…', he: 'בחר פרי…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── With label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: function WithLabel() {
    const t = useT()
    const fruits = useFruits()
    return (
      <div style={{ width: 240 }}>
        <label
          htmlFor='favorite-fruit'
          style={{
            display: 'block',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-fg)',
            marginBlockEnd: 'var(--space-1)',
          }}
        >
          {t({ en: 'Favorite fruit', he: 'פרי מועדף' })}
        </label>
        <ComboboxRoot items={fruits}>
          <ComboboxInput
            inputId='favorite-fruit'
            placeholder={t({ en: 'Choose a fruit…', he: 'בחר פרי…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Object values ────────────────────────────────────────────────────────────

export const ObjectValues: Story = {
  render: function ObjectValues() {
    const t = useT()
    return (
      <div style={{ width: 300 }}>
        <ComboboxRoot
          items={teamMembers}
          isItemEqualToValue={(item: TeamMember, value: TeamMember) =>
            item.id === value.id
          }
          itemToStringLabel={(item: TeamMember) => item.name}
        >
          <ComboboxInput placeholder={t({ en: 'Assign to…', he: 'הקצה ל…' })} />
          <ComboboxList>
            {(member: TeamMember) => (
              <ComboboxItem key={member.id} value={member}>
                <MemberItem member={member} />
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Object values (multiple) ─────────────────────────────────────────────────

export const ObjectValuesMultiple: Story = {
  render: function ObjectValuesMultiple() {
    const t = useT()
    return (
      <div style={{ width: 340 }}>
        <ComboboxRoot
          multiple
          items={teamMembers}
          defaultValue={[teamMembers[0], teamMembers[2]]}
          isItemEqualToValue={(item: TeamMember, value: TeamMember) =>
            item.id === value.id
          }
          itemToStringLabel={(item: TeamMember) => item.name}
        >
          <ComboboxMultiInput<TeamMember>
            placeholder={t({ en: 'Assign reviewers…', he: 'הקצה סוקרים…' })}
          >
            {(member) => (
              <ComboboxChip
                key={member.id}
                chipRemoveProps={{
                  'aria-label': t({
                    en: `Remove ${member.name}`,
                    he: `הסר ${member.name}`,
                  }),
                }}
              >
                {member.name}
              </ComboboxChip>
            )}
          </ComboboxMultiInput>
          <ComboboxList>
            {(member: TeamMember) => (
              <ComboboxItem key={member.id} value={member}>
                <MemberItem member={member} />
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Object values (multiple, default chips) ──────────────────────────────────

export const ObjectValuesMultipleDefault: Story = {
  render: function ObjectValuesMultipleDefault() {
    const t = useT()
    return (
      <div style={{ width: 340 }}>
        <ComboboxRoot
          multiple
          items={teamMembers}
          defaultValue={[teamMembers[0], teamMembers[2]]}
          isItemEqualToValue={(item: TeamMember, value: TeamMember) =>
            item.id === value.id
          }
          itemToStringLabel={(item: TeamMember) => item.name}
        >
          <ComboboxMultiInput<TeamMember>
            placeholder={t({ en: 'Assign reviewers…', he: 'הקצה סוקרים…' })}
          />
          <ComboboxList>
            {(member: TeamMember) => (
              <ComboboxItem key={member.id} value={member}>
                <MemberItem member={member} />
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Value + label objects ────────────────────────────────────────────────────

interface LabeledOption {
  value: string
  label: string
}

const labeledOptions: LabeledOption[] = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
  { value: 'rs', label: 'Rust' },
  { value: 'go', label: 'Go' },
]

export const ValueLabelObjects: Story = {
  render: function ValueLabelObjects() {
    const t = useT()
    return (
      <div style={{ width: 340 }}>
        <ComboboxRoot
          multiple
          items={labeledOptions}
          defaultValue={[labeledOptions[0], labeledOptions[1]]}
          isItemEqualToValue={(a: LabeledOption, b: LabeledOption) =>
            a.value === b.value
          }
        >
          <ComboboxMultiInput<LabeledOption>
            placeholder={t({ en: 'Pick languages…', he: 'בחר שפות…' })}
          />
          <ComboboxList>
            {(opt: LabeledOption) => (
              <ComboboxItem key={opt.value} value={opt}>
                {opt.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Custom filter ────────────────────────────────────────────────────────────

export const CustomFilter: Story = {
  render: function CustomFilter() {
    const t = useT()
    const fruits = useFruits()
    return (
      <div style={{ width: 240 }}>
        <ComboboxRoot
          items={fruits}
          filter={(item: string, query) =>
            item.toLowerCase().startsWith(query.toLowerCase())
          }
        >
          <ComboboxInput
            placeholder={t({
              en: 'Type a letter to match start…',
              he: 'הקלד אות לחיפוש לפי התחלה…',
            })}
          />
          <ComboboxList
            emptyMessage={t({
              en: 'No fruits start with that.',
              he: 'אין פירות המתחילים באות זו.',
            })}
          >
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: function ControlledStory() {
    const t = useT()
    const fruits = useFruits()
    const [value, setValue] = React.useState<string | null>(
      t({ en: 'Mango', he: 'מנגו' }),
    )
    const presets = [
      t({ en: 'Apple', he: 'תפוח' }),
      t({ en: 'Banana', he: 'בננה' }),
      t({ en: 'Mango', he: 'מנגו' }),
      t({ en: 'Strawberry', he: 'תות' }),
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
        <ComboboxRoot
          items={fruits}
          value={value}
          onValueChange={(v) => setValue(v)}
        >
          <ComboboxInput
            placeholder={t({ en: 'Choose a fruit…', he: 'בחר פרי…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-subtle)',
            margin: 0,
          }}
        >
          {t({ en: 'Selected:', he: 'נבחר:' })}{' '}
          <strong style={{ color: 'var(--color-fg)' }}>{value ?? '—'}</strong>
        </p>
        <div
          style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}
        >
          {presets.map((fruit) => (
            <button
              key={fruit}
              type='button'
              onClick={() => setValue(fruit)}
              style={{
                fontSize: 'var(--font-size-xs)',
                padding: '3px var(--space-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                background:
                  value === fruit ? 'var(--color-primary)' : 'transparent',
                color: value === fruit ? '#fff' : 'var(--color-fg)',
                cursor: 'pointer',
              }}
            >
              {fruit}
            </button>
          ))}
          <button
            type='button'
            onClick={() => setValue(null)}
            style={{
              fontSize: 'var(--font-size-xs)',
              padding: '3px var(--space-2)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              color: 'var(--color-fg-subtle)',
              cursor: 'pointer',
            }}
          >
            {t({ en: 'Clear', he: 'נקה' })}
          </button>
        </div>
      </div>
    )
  },
}

// ─── With disabled items ──────────────────────────────────────────────────────

export const WithDisabledItems: Story = {
  render: function WithDisabledItems() {
    const t = useT()
    const fruits = useFruits()
    const outOfStock = new Set([
      t({ en: 'Durian', he: 'דוריאן' }),
      t({ en: 'Elderberry', he: 'אסמבוסים' }),
      t({ en: 'Papaya', he: 'פפאיה' }),
    ])
    return (
      <div style={{ width: 240 }}>
        <ComboboxRoot items={fruits}>
          <ComboboxInput
            placeholder={t({ en: 'Choose a fruit…', he: 'בחר פרי…' })}
          />
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem
                key={fruit}
                value={fruit}
                disabled={outOfStock.has(fruit)}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 'var(--space-2)',
                  }}
                >
                  <span>{fruit}</span>
                  {outOfStock.has(fruit) && (
                    <span
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        flexShrink: 0,
                      }}
                    >
                      {t({ en: 'Out of stock', he: 'אזל מהמלאי' })}
                    </span>
                  )}
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Async search ─────────────────────────────────────────────────────────────

export const AsyncSearch: Story = {
  render: function AsyncSearchStory() {
    const t = useT()
    const [filteredItems, setFilteredItems] = React.useState<string[]>([])
    const [inputValue, setInputValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      if (!inputValue.trim()) {
        setFilteredItems([])
        setLoading(false)
        return
      }
      setLoading(true)
      const timer = setTimeout(() => {
        setFilteredItems(
          countries.filter((c) =>
            c.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        )
        setLoading(false)
      }, 350)
      return () => clearTimeout(timer)
    }, [inputValue])

    return (
      <div style={{ width: 260 }}>
        <ComboboxRoot
          items={filteredItems}
          filteredItems={filteredItems}
          inputValue={inputValue}
          onInputValueChange={(v) => setInputValue(v)}
        >
          <ComboboxInput
            placeholder={t({ en: 'Search countries…', he: 'חפש מדינות…' })}
            clearable={false}
          />
          <ComboboxList
            statusMessage={
              loading
                ? t({ en: 'Loading…', he: 'טוען…' })
                : !inputValue.trim()
                  ? t({
                      en: 'Start typing to search.',
                      he: 'התחל להקליד לחיפוש.',
                    })
                  : null
            }
            emptyMessage={t({
              en: 'No countries found.',
              he: 'לא נמצאו מדינות.',
            })}
          >
            {(country: string) => (
              <ComboboxItem key={country} value={country}>
                {country}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}

// ─── Async + controlled ───────────────────────────────────────────────────────

export const AsyncControlled: Story = {
  render: function AsyncControlledStory() {
    const t = useT()
    const [value, setValue] = React.useState<string | null>('France')
    const [filteredItems, setFilteredItems] = React.useState<string[]>([])
    const [inputValue, setInputValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      if (!inputValue.trim()) {
        setFilteredItems([])
        setLoading(false)
        return
      }
      setLoading(true)
      const timer = setTimeout(() => {
        setFilteredItems(
          countries.filter((c) =>
            c.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        )
        setLoading(false)
      }, 350)
      return () => clearTimeout(timer)
    }, [inputValue])

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          width: 260,
        }}
      >
        <ComboboxRoot
          items={filteredItems}
          filteredItems={filteredItems}
          value={value}
          onValueChange={(v) => setValue(v)}
          inputValue={inputValue}
          onInputValueChange={(v) => setInputValue(v)}
        >
          <ComboboxInput
            placeholder={t({ en: 'Search countries…', he: 'חפש מדינות…' })}
            clearable={false}
          />
          <ComboboxList
            statusMessage={
              loading
                ? t({ en: 'Loading…', he: 'טוען…' })
                : !inputValue.trim()
                  ? t({
                      en: 'Start typing to search.',
                      he: 'התחל להקליד לחיפוש.',
                    })
                  : null
            }
            emptyMessage={t({
              en: 'No countries found.',
              he: 'לא נמצאו מדינות.',
            })}
          >
            {(country: string) => (
              <ComboboxItem key={country} value={country}>
                {country}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-subtle)',
            margin: 0,
          }}
        >
          {t({ en: 'Selected:', he: 'נבחר:' })}{' '}
          <strong style={{ color: 'var(--color-fg)' }}>{value ?? '—'}</strong>
        </p>
        <div
          style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}
        >
          {(['France', 'Germany', 'Japan', 'Brazil'] as const).map(
            (country) => (
              <button
                key={country}
                type='button'
                onClick={() => setValue(country)}
                style={{
                  fontSize: 'var(--font-size-xs)',
                  padding: '3px var(--space-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  background:
                    value === country ? 'var(--color-primary)' : 'transparent',
                  color: value === country ? '#fff' : 'var(--color-fg)',
                  cursor: 'pointer',
                }}
              >
                {country}
              </button>
            ),
          )}
          <button
            type='button'
            onClick={() => setValue(null)}
            style={{
              fontSize: 'var(--font-size-xs)',
              padding: '3px var(--space-2)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              color: 'var(--color-fg-subtle)',
              cursor: 'pointer',
            }}
          >
            {t({ en: 'Clear', he: 'נקה' })}
          </button>
        </div>
      </div>
    )
  },
}

// ─── Async multiple ───────────────────────────────────────────────────────────

export const AsyncMultiple: Story = {
  render: function AsyncMultipleStory() {
    const t = useT()
    const [value, setValue] = React.useState<TeamMember[]>([])
    const [filteredItems, setFilteredItems] = React.useState<TeamMember[]>([])
    const [inputValue, setInputValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      if (!inputValue.trim()) {
        setFilteredItems(value)
        setLoading(false)
        return
      }
      setLoading(true)
      const timer = setTimeout(() => {
        const results = teamMembers.filter((m) =>
          m.name.toLowerCase().includes(inputValue.toLowerCase()),
        )
        const selectedIds = new Set(value.map((m) => m.id))
        const merged = [
          ...value,
          ...results.filter((r) => !selectedIds.has(r.id)),
        ]
        setFilteredItems(merged)
        setLoading(false)
      }, 350)
      return () => clearTimeout(timer)
    }, [inputValue, value])

    return (
      <div style={{ width: 340 }}>
        <ComboboxRoot
          multiple
          items={filteredItems}
          filteredItems={filteredItems}
          value={value}
          onValueChange={(v) => setValue(v ?? [])}
          inputValue={inputValue}
          onInputValueChange={(v) => setInputValue(v)}
          isItemEqualToValue={(item, val) => item.id === val.id}
          itemToStringLabel={(item) => item.name}
        >
          <ComboboxMultiInput<TeamMember>
            placeholder={t({
              en: 'Search team members…',
              he: 'חפש חברי צוות…',
            })}
          >
            {(member) => (
              <ComboboxChip
                key={member.id}
                chipRemoveProps={{
                  'aria-label': t({
                    en: `Remove ${member.name}`,
                    he: `הסר ${member.name}`,
                  }),
                }}
              >
                {member.name}
              </ComboboxChip>
            )}
          </ComboboxMultiInput>
          <ComboboxList
            statusMessage={
              loading
                ? t({ en: 'Loading…', he: 'טוען…' })
                : !inputValue.trim() && value.length === 0
                  ? t({
                      en: 'Search team members to add.',
                      he: 'חפש חברי צוות להוספה.',
                    })
                  : null
            }
            emptyMessage={t({
              en: 'No team members found.',
              he: 'לא נמצאו חברי צוות.',
            })}
          >
            {(member: TeamMember) => (
              <ComboboxItem key={member.id} value={member}>
                <MemberItem member={member} />
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxRoot>
      </div>
    )
  },
}
