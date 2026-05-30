import type { Meta, StoryObj } from '@storybook/react'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
import {
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLinkItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRoot,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from './Menu'

export default {
  title: 'Overlays/Menu',
  component: MenuRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MenuRoot>

type Story = StoryObj<typeof MenuRoot>

export const Primary: Story = {
  render: function Primary() {
    const t = useT()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'Song', he: 'שיר' })} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuItem>{t({ en: 'Add to Library', he: 'הוסף לספרייה' })}</MenuItem>
          <MenuItem>
            {t({ en: 'Add to Playlist', he: 'הוסף לפלייליסט' })}
          </MenuItem>
          <MenuSeparator />
          <MenuItem>{t({ en: 'Play Next', he: 'נגן הבא' })}</MenuItem>
          <MenuItem>{t({ en: 'Play Last', he: 'נגן אחרון' })}</MenuItem>
          <MenuSeparator />
          <MenuItem>{t({ en: 'Favorite', he: 'מועדף' })}</MenuItem>
          <MenuItem>{t({ en: 'Share', he: 'שתף' })}</MenuItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithDisabledItem: Story = {
  render: function WithDisabledItem() {
    const t = useT()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'Actions', he: 'פעולות' })}{' '}
          <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuItem>{t({ en: 'Edit', he: 'ערוך' })}</MenuItem>
          <MenuItem>{t({ en: 'Duplicate', he: 'שכפל' })}</MenuItem>
          <MenuSeparator />
          <MenuItem disabled>
            {t({ en: 'Archive (unavailable)', he: 'ארכיון (לא זמין)' })}
          </MenuItem>
          <MenuItem>{t({ en: 'Delete', he: 'מחק' })}</MenuItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithGroups: Story = {
  render: function WithGroups() {
    const t = useT()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'View', he: 'תצוגה' })} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuGroupLabel>{t({ en: 'Layout', he: 'פריסה' })}</MenuGroupLabel>
            <MenuItem>{t({ en: 'List', he: 'רשימה' })}</MenuItem>
            <MenuItem>{t({ en: 'Grid', he: 'רשת' })}</MenuItem>
            <MenuItem>{t({ en: 'Columns', he: 'עמודות' })}</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuGroupLabel>
              {t({ en: 'Sort By', he: 'מיון לפי' })}
            </MenuGroupLabel>
            <MenuItem>{t({ en: 'Name', he: 'שם' })}</MenuItem>
            <MenuItem>{t({ en: 'Date Modified', he: 'תאריך שינוי' })}</MenuItem>
            <MenuItem>{t({ en: 'Size', he: 'גודל' })}</MenuItem>
          </MenuGroup>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithCheckboxItems: Story = {
  render: function WithCheckboxItemsStory() {
    const t = useT()
    const [showMinimap, setShowMinimap] = React.useState(true)
    const [showSearch, setShowSearch] = React.useState(true)
    const [showSidebar, setShowSidebar] = React.useState(false)

    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'Workspace', he: 'סביבת עבודה' })}{' '}
          <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem
            checked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            {t({ en: 'Minimap', he: 'מפה מוקטנת' })}
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSearch}
            onCheckedChange={setShowSearch}
          >
            {t({ en: 'Search Panel', he: 'לוח חיפוש' })}
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            {t({ en: 'Sidebar', he: 'סרגל צד' })}
          </MenuCheckboxItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithRadioItems: Story = {
  render: function WithRadioItemsStory() {
    const t = useT()
    const [value, setValue] = React.useState('date')

    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'Sort', he: 'מיין' })} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuRadioGroup value={value} onValueChange={setValue}>
            <MenuRadioItem value='date'>
              {t({ en: 'Date', he: 'תאריך' })}
            </MenuRadioItem>
            <MenuRadioItem value='name'>
              {t({ en: 'Name', he: 'שם' })}
            </MenuRadioItem>
            <MenuRadioItem value='type'>
              {t({ en: 'Type', he: 'סוג' })}
            </MenuRadioItem>
            <MenuRadioItem value='size'>
              {t({ en: 'Size', he: 'גודל' })}
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithRadioAndCheckboxGroups: Story = {
  render: function WithRadioAndCheckboxGroupsStory() {
    const t = useT()
    const [sortValue, setSortValue] = React.useState('date')
    const [showMinimap, setShowMinimap] = React.useState(true)
    const [showSearch, setShowSearch] = React.useState(true)
    const [showSidebar, setShowSidebar] = React.useState(false)

    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'View', he: 'תצוגה' })} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuGroupLabel>{t({ en: 'Sort', he: 'מיון' })}</MenuGroupLabel>
            <MenuRadioGroup value={sortValue} onValueChange={setSortValue}>
              <MenuRadioItem value='date'>
                {t({ en: 'Date', he: 'תאריך' })}
              </MenuRadioItem>
              <MenuRadioItem value='name'>
                {t({ en: 'Name', he: 'שם' })}
              </MenuRadioItem>
              <MenuRadioItem value='type'>
                {t({ en: 'Type', he: 'סוג' })}
              </MenuRadioItem>
            </MenuRadioGroup>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuGroupLabel>
              {t({ en: 'Workspace', he: 'סביבת עבודה' })}
            </MenuGroupLabel>
            <MenuCheckboxItem
              checked={showMinimap}
              onCheckedChange={setShowMinimap}
            >
              {t({ en: 'Minimap', he: 'מפה מוקטנת' })}
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={showSearch}
              onCheckedChange={setShowSearch}
            >
              {t({ en: 'Search Panel', he: 'לוח חיפוש' })}
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={showSidebar}
              onCheckedChange={setShowSidebar}
            >
              {t({ en: 'Sidebar', he: 'סרגל צד' })}
            </MenuCheckboxItem>
          </MenuGroup>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const NestedMenu: Story = {
  render: function NestedMenu() {
    const t = useT()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'Song', he: 'שיר' })} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuItem>{t({ en: 'Add to Library', he: 'הוסף לספרייה' })}</MenuItem>
          <MenuSubmenuRoot>
            <MenuSubmenuTrigger>
              {t({ en: 'Add to Playlist', he: 'הוסף לפלייליסט' })}
            </MenuSubmenuTrigger>
            <MenuContent
              side='right'
              sideOffset={-4}
              align='start'
              alignOffset={-4}
            >
              <MenuItem>Get Up!</MenuItem>
              <MenuItem>Inside Out</MenuItem>
              <MenuItem>Night Beats</MenuItem>
              <MenuSeparator />
              <MenuItem>
                {t({ en: 'New playlist…', he: 'פלייליסט חדש…' })}
              </MenuItem>
            </MenuContent>
          </MenuSubmenuRoot>
          <MenuSeparator />
          <MenuItem>{t({ en: 'Play Next', he: 'נגן הבא' })}</MenuItem>
          <MenuItem>{t({ en: 'Play Last', he: 'נגן אחרון' })}</MenuItem>
          <MenuSeparator />
          <MenuItem>{t({ en: 'Favorite', he: 'מועדף' })}</MenuItem>
          <MenuItem>{t({ en: 'Share', he: 'שתף' })}</MenuItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithLinkItems: Story = {
  render: function WithLinkItems() {
    const t = useT()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t({ en: 'Navigate', he: 'נווט' })}{' '}
          <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuLinkItem href='#'>
            {t({ en: 'Dashboard', he: 'לוח בקרה' })}
          </MenuLinkItem>
          <MenuLinkItem href='#'>
            {t({ en: 'Projects', he: 'פרויקטים' })}
          </MenuLinkItem>
          <MenuLinkItem href='#'>
            {t({ en: 'Settings', he: 'הגדרות' })}
          </MenuLinkItem>
          <MenuSeparator />
          <MenuLinkItem href='#'>
            {t({ en: 'Documentation', he: 'תיעוד' })}
          </MenuLinkItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}
