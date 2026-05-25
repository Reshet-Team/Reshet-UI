import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxChip,
} from './Combobox'

export default {
  title: 'Components/Combobox',
  component: ComboboxRoot,
  tags: ['autodocs'],
} satisfies Meta<typeof ComboboxRoot>

type Story = StoryObj<typeof ComboboxRoot>

// ─── Sample data ──────────────────────────────────────────────────────────────

const fruits = [
  'Apple',
  'Apricot',
  'Banana',
  'Blueberry',
  'Cherry',
  'Durian',
  'Elderberry',
  'Fig',
  'Grape',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Raspberry',
  'Strawberry',
]

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <ComboboxRoot items={fruits}>
        <ComboboxInput placeholder='Choose a fruit…' />
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── With default value ───────────────────────────────────────────────────────

export const WithDefaultValue: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <ComboboxRoot items={fruits} defaultValue='Mango'>
        <ComboboxInput placeholder='Choose a fruit…' />
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

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
        <ComboboxRoot key={size} items={fruits}>
          <ComboboxInput
            size={size}
            placeholder={`${size.toUpperCase()} — choose a fruit`}
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
  ),
}

// ─── Grouped ─────────────────────────────────────────────────────────────────

const produce = [
  {
    value: 'Fruits',
    items: ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange'],
  },
  {
    value: 'Vegetables',
    items: ['Broccoli', 'Carrot', 'Cucumber', 'Lettuce', 'Spinach', 'Tomato'],
  },
  {
    value: 'Herbs',
    items: ['Basil', 'Chive', 'Cilantro', 'Dill', 'Mint', 'Thyme'],
  },
]

export const Grouped: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <ComboboxRoot items={produce}>
        <ComboboxInput placeholder='Search produce…' />
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
  ),
}

// ─── Multiple select ──────────────────────────────────────────────────────────

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <ComboboxRoot multiple items={fruits} defaultValue={['Apple', 'Mango']}>
        <ComboboxInput multiple placeholder='Add fruits…'>
          {(item: string) => (
            <ComboboxChip
              key={item}
              chipRemoveProps={{ 'aria-label': `Remove ${item}` }}
            >
              {item}
            </ComboboxChip>
          )}
        </ComboboxInput>
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Multiple select (default chips) ─────────────────────────────────────────

export const MultipleDefault: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <ComboboxRoot multiple items={fruits} defaultValue={['Apple', 'Mango']}>
        <ComboboxInput multiple placeholder='Add fruits…' />
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <ComboboxRoot items={fruits} defaultValue='Cherry' disabled>
        <ComboboxInput placeholder='Choose a fruit…' />
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── With label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
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
        Favorite fruit
      </label>
      <ComboboxRoot items={fruits}>
        <ComboboxInput inputId='favorite-fruit' placeholder='Choose a fruit…' />
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Object values ────────────────────────────────────────────────────────────

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

export const ObjectValues: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <ComboboxRoot
        items={teamMembers}
        isItemEqualToValue={(item: TeamMember, value: TeamMember) =>
          item.id === value.id
        }
        itemToStringLabel={(item: TeamMember) => item.name}
      >
        <ComboboxInput placeholder='Assign to…' />
        <ComboboxList>
          {(member: TeamMember) => (
            <ComboboxItem key={member.id} value={member}>
              <MemberItem member={member} />
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Object values (multiple) ─────────────────────────────────────────────────

export const ObjectValuesMultiple: Story = {
  render: () => (
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
        <ComboboxInput multiple placeholder='Assign reviewers…'>
          {(member: TeamMember) => (
            <ComboboxChip
              key={member.id}
              chipRemoveProps={{ 'aria-label': `Remove ${member.name}` }}
            >
              {member.name}
            </ComboboxChip>
          )}
        </ComboboxInput>
        <ComboboxList>
          {(member: TeamMember) => (
            <ComboboxItem key={member.id} value={member}>
              <MemberItem member={member} />
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Custom filter ────────────────────────────────────────────────────────────

export const CustomFilter: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <ComboboxRoot
        items={fruits}
        filter={(item: string, query) =>
          item.toLowerCase().startsWith(query.toLowerCase())
        }
      >
        <ComboboxInput placeholder='Type a letter to match start…' />
        <ComboboxList emptyMessage='No fruits start with that.'>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = React.useState<string | null>('Mango')

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
          <ComboboxInput placeholder='Choose a fruit…' />
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
          Selected:{' '}
          <strong style={{ color: 'var(--color-fg)' }}>{value ?? '—'}</strong>
        </p>
        <div
          style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}
        >
          {(['Apple', 'Banana', 'Mango', 'Strawberry'] as const).map(
            (fruit) => (
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
            Clear
          </button>
        </div>
      </div>
    )
  },
}

// ─── With disabled items ──────────────────────────────────────────────────────

const outOfStock = new Set(['Durian', 'Elderberry', 'Papaya'])

export const WithDisabledItems: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <ComboboxRoot items={fruits}>
        <ComboboxInput placeholder='Choose a fruit…' />
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
                    Out of stock
                  </span>
                )}
              </span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxRoot>
    </div>
  ),
}

// ─── Async search ─────────────────────────────────────────────────────────────

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

export const AsyncSearch: Story = {
  render: function AsyncSearchStory() {
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
          <ComboboxInput placeholder='Search countries…' clearable={false} />
          <ComboboxList
            isLoading={loading}
            statusMessage={
              !inputValue.trim() ? 'Start typing to search.' : null
            }
            emptyMessage='No countries found.'
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
          <ComboboxInput placeholder='Search countries…' clearable={false} />
          <ComboboxList
            isLoading={loading}
            statusMessage={
              !inputValue.trim() ? 'Start typing to search.' : null
            }
            emptyMessage='No countries found.'
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
          Selected:{' '}
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
            Clear
          </button>
        </div>
      </div>
    )
  },
}

// ─── Async multiple ───────────────────────────────────────────────────────────

export const AsyncMultiple: Story = {
  render: function AsyncMultipleStory() {
    const [value, setValue] = React.useState<TeamMember[]>([])
    const [filteredItems, setFilteredItems] = React.useState<TeamMember[]>([])
    const [inputValue, setInputValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      if (!inputValue.trim()) {
        // Show selected items when input is empty
        setFilteredItems(value)
        setLoading(false)
        return
      }
      setLoading(true)
      const timer = setTimeout(() => {
        const results = teamMembers.filter((m) =>
          m.name.toLowerCase().includes(inputValue.toLowerCase()),
        )
        // Always keep selected items in the list
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
          <ComboboxInput multiple placeholder='Search team members…'>
            {(member: TeamMember) => (
              <ComboboxChip
                key={member.id}
                chipRemoveProps={{ 'aria-label': `Remove ${member.name}` }}
              >
                {member.name}
              </ComboboxChip>
            )}
          </ComboboxInput>
          <ComboboxList
            isLoading={loading}
            statusMessage={
              !inputValue.trim() && value.length === 0
                ? 'Search team members to add.'
                : null
            }
            emptyMessage='No team members found.'
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
