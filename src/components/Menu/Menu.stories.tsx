import type { Meta, StoryObj } from '@storybook/react'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t('menu.song')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuItem>{t('menu.addToLibrary')}</MenuItem>
          <MenuItem>{t('menu.addToPlaylist')}</MenuItem>
          <MenuSeparator />
          <MenuItem>{t('menu.playNext')}</MenuItem>
          <MenuItem>{t('menu.playLast')}</MenuItem>
          <MenuSeparator />
          <MenuItem>{t('menu.favorite')}</MenuItem>
          <MenuItem>{t('common.share')}</MenuItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithDisabledItem: Story = {
  render: function WithDisabledItem() {
    const { t } = useTranslation()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t('common.actions')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuItem>{t('common.edit')}</MenuItem>
          <MenuItem>{t('common.duplicate')}</MenuItem>
          <MenuSeparator />
          <MenuItem disabled>{t('menu.archive')}</MenuItem>
          <MenuItem>{t('common.delete')}</MenuItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithGroups: Story = {
  render: function WithGroups() {
    const { t } = useTranslation()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t('common.view')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuGroupLabel>{t('menu.layout')}</MenuGroupLabel>
            <MenuItem>{t('menu.list')}</MenuItem>
            <MenuItem>{t('menu.grid')}</MenuItem>
            <MenuItem>{t('menu.columns')}</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuGroupLabel>{t('menu.sortBy')}</MenuGroupLabel>
            <MenuItem>{t('menu.name')}</MenuItem>
            <MenuItem>{t('menu.dateModified')}</MenuItem>
            <MenuItem>{t('menu.size')}</MenuItem>
          </MenuGroup>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithCheckboxItems: Story = {
  render: function WithCheckboxItemsStory() {
    const { t } = useTranslation()
    const [showMinimap, setShowMinimap] = React.useState(true)
    const [showSearch, setShowSearch] = React.useState(true)
    const [showSidebar, setShowSidebar] = React.useState(false)

    return (
      <MenuRoot>
        <MenuTrigger>
          {t('menu.workspace')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem checked={showMinimap} onCheckedChange={setShowMinimap}>
            {t('menu.minimap')}
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showSearch} onCheckedChange={setShowSearch}>
            {t('menu.searchPanel')}
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
            {t('menu.sidebar')}
          </MenuCheckboxItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithRadioItems: Story = {
  render: function WithRadioItemsStory() {
    const { t } = useTranslation()
    const [value, setValue] = React.useState('date')

    return (
      <MenuRoot>
        <MenuTrigger>
          {t('menu.sort')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuRadioGroup value={value} onValueChange={setValue}>
            <MenuRadioItem value='date'>{t('menu.dateModified')}</MenuRadioItem>
            <MenuRadioItem value='name'>{t('menu.name')}</MenuRadioItem>
            <MenuRadioItem value='type'>{t('menu.type')}</MenuRadioItem>
            <MenuRadioItem value='size'>{t('menu.size')}</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithRadioAndCheckboxGroups: Story = {
  render: function WithRadioAndCheckboxGroupsStory() {
    const { t } = useTranslation()
    const [sortValue, setSortValue] = React.useState('date')
    const [showMinimap, setShowMinimap] = React.useState(true)
    const [showSearch, setShowSearch] = React.useState(true)
    const [showSidebar, setShowSidebar] = React.useState(false)

    return (
      <MenuRoot>
        <MenuTrigger>
          {t('common.view')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuGroupLabel>{t('menu.sort')}</MenuGroupLabel>
            <MenuRadioGroup value={sortValue} onValueChange={setSortValue}>
              <MenuRadioItem value='date'>{t('menu.dateModified')}</MenuRadioItem>
              <MenuRadioItem value='name'>{t('menu.name')}</MenuRadioItem>
              <MenuRadioItem value='type'>{t('menu.type')}</MenuRadioItem>
            </MenuRadioGroup>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuGroupLabel>{t('menu.workspace')}</MenuGroupLabel>
            <MenuCheckboxItem checked={showMinimap} onCheckedChange={setShowMinimap}>
              {t('menu.minimap')}
            </MenuCheckboxItem>
            <MenuCheckboxItem checked={showSearch} onCheckedChange={setShowSearch}>
              {t('menu.searchPanel')}
            </MenuCheckboxItem>
            <MenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
              {t('menu.sidebar')}
            </MenuCheckboxItem>
          </MenuGroup>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const NestedMenu: Story = {
  render: function NestedMenu() {
    const { t } = useTranslation()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t('menu.song')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuItem>{t('menu.addToLibrary')}</MenuItem>
          <MenuSubmenuRoot>
            <MenuSubmenuTrigger>{t('menu.addToPlaylist')}</MenuSubmenuTrigger>
            <MenuContent side='right' sideOffset={-4} align='start' alignOffset={-4}>
              <MenuItem>Get Up!</MenuItem>
              <MenuItem>Inside Out</MenuItem>
              <MenuItem>Night Beats</MenuItem>
              <MenuSeparator />
              <MenuItem>{t('menu.newPlaylist')}</MenuItem>
            </MenuContent>
          </MenuSubmenuRoot>
          <MenuSeparator />
          <MenuItem>{t('menu.playNext')}</MenuItem>
          <MenuItem>{t('menu.playLast')}</MenuItem>
          <MenuSeparator />
          <MenuItem>{t('menu.favorite')}</MenuItem>
          <MenuItem>{t('common.share')}</MenuItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}

export const WithLinkItems: Story = {
  render: function WithLinkItems() {
    const { t } = useTranslation()
    return (
      <MenuRoot>
        <MenuTrigger>
          {t('kbd.navigate')} <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuLinkItem href='#'>{t('common.dashboard')}</MenuLinkItem>
          <MenuLinkItem href='#'>{t('tabs.projects')}</MenuLinkItem>
          <MenuLinkItem href='#'>{t('common.settings')}</MenuLinkItem>
          <MenuSeparator />
          <MenuLinkItem href='#'>{t('drawer.documentation')}</MenuLinkItem>
        </MenuContent>
      </MenuRoot>
    )
  },
}
