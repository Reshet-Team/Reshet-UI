import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import {
  CheckboxGroupItem,
  CheckboxGroupRoot,
  CheckboxGroupSelectAll,
} from './CheckboxGroup'

export default {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroupRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckboxGroupRoot>

type Story = StoryObj<typeof CheckboxGroupRoot>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <CheckboxGroupRoot
        legend={t({ en: 'Favourite apples', he: 'תפוחים מועדפים' })}
        defaultValue={['fuji']}
      >
        <CheckboxGroupItem value='fuji'>
          {t({ en: 'Fuji', he: "פוג'י" })}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>
          {t({ en: 'Gala', he: 'גאלה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>
          {t({ en: 'Granny Smith', he: 'גרני סמית' })}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const t = useT()
    return (
      <CheckboxGroupRoot
        legend={t({ en: 'Permissions', he: 'הרשאות' })}
        defaultValue={['read']}
      >
        <CheckboxGroupItem
          value='read'
          description={t({ en: 'View all content', he: 'צפייה בכל התוכן' })}
        >
          {t({ en: 'Read', he: 'קריאה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='write'
          description={t({
            en: 'Create and edit content',
            he: 'יצירה ועריכת תוכן',
          })}
        >
          {t({ en: 'Write', he: 'כתיבה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='delete'
          description={t({
            en: 'Remove content permanently',
            he: 'הסרת תוכן לצמיתות',
          })}
        >
          {t({ en: 'Delete', he: 'מחיקה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='admin'
          description={t({ en: 'Full system access', he: 'גישה מלאה למערכת' })}
          disabled
        >
          {t({ en: 'Admin', he: 'מנהל' })}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const WithSelectAllAndDescriptions: Story = {
  render: function WithSelectAllAndDescriptions() {
    const t = useT()
    return (
      <CheckboxGroupRoot
        legend={t({ en: 'Permissions', he: 'הרשאות' })}
        defaultValue={['read', 'write']}
        allValues={['read', 'write', 'delete', 'admin']}
      >
        <CheckboxGroupSelectAll>
          {t({ en: 'Select all', he: 'בחר הכל' })}
        </CheckboxGroupSelectAll>
        <CheckboxGroupItem
          value='read'
          description={t({ en: 'View all content', he: 'צפייה בכל התוכן' })}
        >
          {t({ en: 'Read', he: 'קריאה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='write'
          description={t({
            en: 'Create and edit content',
            he: 'יצירה ועריכת תוכן',
          })}
        >
          {t({ en: 'Write', he: 'כתיבה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='delete'
          description={t({
            en: 'Remove content permanently',
            he: 'הסרת תוכן לצמיתות',
          })}
        >
          {t({ en: 'Delete', he: 'מחיקה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='admin'
          description={t({ en: 'Full system access', he: 'גישה מלאה למערכת' })}
          disabled
        >
          {t({ en: 'Admin', he: 'מנהל' })}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const WithSelectAll: Story = {
  render: function WithSelectAll() {
    const t = useT()
    return (
      <CheckboxGroupRoot
        legend={t({ en: 'Select apples', he: 'בחר תפוחים' })}
        defaultValue={['fuji', 'gala']}
        allValues={['fuji', 'gala', 'granny-smith']}
      >
        <CheckboxGroupSelectAll>
          {t({ en: 'Select all', he: 'בחר הכל' })}
        </CheckboxGroupSelectAll>
        <CheckboxGroupItem value='fuji'>
          {t({ en: 'Fuji', he: "פוג'י" })}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>
          {t({ en: 'Gala', he: 'גאלה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>
          {t({ en: 'Granny Smith', he: 'גרני סמית' })}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <CheckboxGroupRoot
        legend={t({ en: 'Disabled group', he: 'קבוצה מושבתת' })}
        defaultValue={['fuji']}
        disabled
      >
        <CheckboxGroupItem value='fuji'>
          {t({ en: 'Fuji', he: "פוג'י" })}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>
          {t({ en: 'Gala', he: 'גאלה' })}
        </CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>
          {t({ en: 'Granny Smith', he: 'גרני סמית' })}
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
        }}
      >
        <CheckboxGroupRoot
          legend={t({ en: 'Small', he: 'קטן' })}
          size='sm'
          defaultValue={['fuji']}
        >
          <CheckboxGroupItem value='fuji'>
            {t({ en: 'Fuji', he: "פוג'י" })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t({ en: 'Gala', he: 'גאלה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t({ en: 'Granny Smith', he: 'גרני סמית' })}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t({ en: 'Medium', he: 'בינוני' })}
          size='md'
          defaultValue={['fuji']}
        >
          <CheckboxGroupItem value='fuji'>
            {t({ en: 'Fuji', he: "פוג'י" })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t({ en: 'Gala', he: 'גאלה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t({ en: 'Granny Smith', he: 'גרני סמית' })}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t({ en: 'Large', he: 'גדול' })}
          size='lg'
          defaultValue={['fuji']}
        >
          <CheckboxGroupItem value='fuji'>
            {t({ en: 'Fuji', he: "פוג'י" })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t({ en: 'Gala', he: 'גאלה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t({ en: 'Granny Smith', he: 'גרני סמית' })}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        <CheckboxGroupRoot
          legend={t({ en: 'Basic', he: 'בסיסי' })}
          defaultValue={['gala']}
        >
          <CheckboxGroupItem value='fuji'>
            {t({ en: 'Fuji', he: "פוג'י" })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t({ en: 'Gala', he: 'גאלה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t({ en: 'Granny Smith', he: 'גרני סמית' })}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t({ en: 'With descriptions', he: 'עם תיאורים' })}
          defaultValue={['read', 'write']}
        >
          <CheckboxGroupItem
            value='read'
            description={t({ en: 'View all content', he: 'צפייה בכל התוכן' })}
          >
            {t({ en: 'Read', he: 'קריאה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem
            value='write'
            description={t({
              en: 'Create and edit content',
              he: 'יצירה ועריכת תוכן',
            })}
          >
            {t({ en: 'Write', he: 'כתיבה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem
            value='delete'
            description={t({
              en: 'Remove content permanently',
              he: 'הסרת תוכן לצמיתות',
            })}
          >
            {t({ en: 'Delete', he: 'מחיקה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem
            value='admin'
            description={t({
              en: 'Full system access',
              he: 'גישה מלאה למערכת',
            })}
            disabled
          >
            {t({ en: 'Admin', he: 'מנהל' })}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
        <CheckboxGroupRoot
          legend={t({ en: 'With select all', he: 'עם בחר הכל' })}
          defaultValue={['fuji']}
          allValues={['fuji', 'gala', 'granny-smith']}
        >
          <CheckboxGroupSelectAll>
            {t({ en: 'Select all', he: 'בחר הכל' })}
          </CheckboxGroupSelectAll>
          <CheckboxGroupItem value='fuji'>
            {t({ en: 'Fuji', he: "פוג'י" })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='gala'>
            {t({ en: 'Gala', he: 'גאלה' })}
          </CheckboxGroupItem>
          <CheckboxGroupItem value='granny-smith'>
            {t({ en: 'Granny Smith', he: 'גרני סמית' })}
          </CheckboxGroupItem>
        </CheckboxGroupRoot>
      </div>
    )
  },
}
