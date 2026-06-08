import type { Meta, StoryObj } from '@storybook/react'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Image,
  Italic,
  Link,
  Search,
  Table,
  Underline,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { MenuContent, MenuItem, MenuRoot, MenuSeparator, MenuTrigger } from '../Menu/Menu'
import { NumberFieldInput, NumberFieldRoot } from '../NumberField/NumberField'
import { SelectItem, SelectList, SelectRoot, SelectTrigger } from '../Select/Select'
import { Toggle } from '../Toggle/Toggle'
import { ToggleGroup } from '../ToggleGroup/ToggleGroup'
import {
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
} from './Toolbar'

export default {
  title: 'Navigation/Toolbar',
  component: ToolbarRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToolbarRoot>

type Story = StoryObj<typeof ToolbarRoot>

export const Default: Story = {
  render: function Default() {
    const { t } = useTranslation()
    return (
      <ToolbarRoot aria-label={t('toolbar.formattingToolbar')}>
        <ToggleGroup
          multiple
          defaultValue={['bold']}
          aria-label={t('toolbar.textStyle')}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton render={<Toggle />} value='bold' aria-label={t('toolbar.bold')}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='italic' aria-label={t('toolbar.italic')}>
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='underline' aria-label={t('toolbar.underline')}>
            <Underline size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToggleGroup
          defaultValue={['left']}
          aria-label={t('toggleGroup.textAlignment')}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton render={<Toggle />} value='left' aria-label={t('toolbar.alignLeft')}>
            <AlignLeft size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='right' aria-label={t('toolbar.alignRight')}>
            <AlignRight size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label={t('common.actions')}>
          <ToolbarButton aria-label={t('menu.moreOptions')} style={{ paddingInline: 8, gap: 4 }}>
            {t('common.options')} <ChevronDown size={14} />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarLink href='#' style={{ marginInlineStart: 'auto', marginInlineEnd: 8 }}>
          {t('toolbar.lastSaved')}
        </ToolbarLink>
      </ToolbarRoot>
    )
  },
}

export const WithMenu: Story = {
  render: function WithMenu() {
    const { t } = useTranslation()
    return (
      <ToolbarRoot aria-label={t('toolbar.richTextToolbar')}>
        <MenuRoot>
          <ToolbarButton
            render={<MenuTrigger />}
            style={{
              paddingInline: 'var(--space-3)',
              gap: 'var(--space-2)',
              minWidth: 120,
            }}
          >
            {t('toolbar.paragraph')} <ChevronDown size={14} aria-hidden />
          </ToolbarButton>
          <MenuContent>
            <MenuItem>{t('toolbar.normalText')}</MenuItem>
            <MenuItem>{t('toolbar.heading1')}</MenuItem>
            <MenuItem>{t('toolbar.heading2')}</MenuItem>
            <MenuItem>{t('toolbar.heading3')}</MenuItem>
            <MenuSeparator />
            <MenuItem>{t('toolbar.codeBlock')}</MenuItem>
            <MenuItem>{t('toolbar.quote')}</MenuItem>
          </MenuContent>
        </MenuRoot>
        <ToolbarSeparator />
        <ToggleGroup
          multiple
          defaultValue={['bold']}
          aria-label={t('toolbar.textStyle')}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton render={<Toggle />} value='bold' aria-label={t('toolbar.bold')}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='italic' aria-label={t('toolbar.italic')}>
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='underline' aria-label={t('toolbar.underline')}>
            <Underline size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <MenuRoot>
          <ToolbarButton
            render={<MenuTrigger />}
            style={{ paddingInline: 'var(--space-3)', gap: 'var(--space-2)' }}
          >
            {t('toolbar.insert')} <ChevronDown size={14} aria-hidden />
          </ToolbarButton>
          <MenuContent>
            <MenuItem>
              <Image size={14} aria-hidden /> {t('toolbar.image')}
            </MenuItem>
            <MenuItem>
              <Link size={14} aria-hidden /> {t('common.link')}
            </MenuItem>
            <MenuItem>
              <Table size={14} aria-hidden /> {t('toolbar.table')}
            </MenuItem>
            <MenuSeparator />
            <MenuItem>{t('toolbar.horizontalRule')}</MenuItem>
          </MenuContent>
        </MenuRoot>
      </ToolbarRoot>
    )
  },
}

export const WithSelect: Story = {
  render: function WithSelect() {
    const { t } = useTranslation()
    return (
      <ToolbarRoot aria-label={t('toolbar.textFormattingToolbar')}>
        <SelectRoot defaultValue='sans'>
          <ToolbarButton render={<SelectTrigger size='sm' placeholder={t('toolbar.font')} />} />
          <SelectList>
            <SelectItem value='sans'>Sans-serif</SelectItem>
            <SelectItem value='serif'>Serif</SelectItem>
            <SelectItem value='mono'>Monospace</SelectItem>
          </SelectList>
        </SelectRoot>
        <ToolbarSeparator />
        <SelectRoot defaultValue='16'>
          <ToolbarButton render={<SelectTrigger size='sm' />} style={{ minWidth: 72 }} />
          <SelectList>
            <SelectItem value='12'>12</SelectItem>
            <SelectItem value='14'>14</SelectItem>
            <SelectItem value='16'>16</SelectItem>
            <SelectItem value='18'>18</SelectItem>
            <SelectItem value='24'>24</SelectItem>
            <SelectItem value='32'>32</SelectItem>
          </SelectList>
        </SelectRoot>
        <ToolbarSeparator />
        <ToggleGroup
          multiple
          aria-label={t('toolbar.textStyle')}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton render={<Toggle />} value='bold' aria-label={t('toolbar.bold')}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='italic' aria-label={t('toolbar.italic')}>
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='underline' aria-label={t('toolbar.underline')}>
            <Underline size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToggleGroup
          defaultValue={['left']}
          aria-label={t('toggleGroup.textAlignment')}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton render={<Toggle />} value='left' aria-label={t('toolbar.alignLeft')}>
            <AlignLeft size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='center' aria-label={t('toolbar.alignCenter')}>
            <AlignCenter size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='right' aria-label={t('toolbar.alignRight')}>
            <AlignRight size={18} />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} value='justify' aria-label={t('toolbar.justify')}>
            <AlignJustify size={18} />
          </ToolbarButton>
        </ToggleGroup>
      </ToolbarRoot>
    )
  },
}

export const WithInputs: Story = {
  render: function WithInputs() {
    const { t } = useTranslation()
    return (
      <ToolbarRoot aria-label={t('toolbar.documentToolbar')}>
        <ToolbarGroup aria-label={t('toolbar.zoom')}>
          <ToolbarButton aria-label={t('toolbar.zoomOut')}>
            <ZoomOut size={18} />
          </ToolbarButton>
          <NumberFieldRoot
            defaultValue={100}
            min={10}
            max={400}
            aria-label={t('toolbar.zoomPercent')}
          >
            <ToolbarInput
              render={<NumberFieldInput />}
              style={{ width: 52, textAlign: 'center' }}
            />
          </NumberFieldRoot>
          <ToolbarButton aria-label={t('toolbar.zoomIn')}>
            <ZoomIn size={18} />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarInput
          type='text'
          placeholder={t('toolbar.findInDocument')}
          aria-label={t('common.search')}
          style={{ width: 200 }}
        />
        <ToolbarSeparator />
        <ToolbarButton style={{ paddingInline: 8, gap: 6 }}>
          <Search size={16} /> {t('kbd.findAll')}
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarLink href='#'>{t('common.help')}</ToolbarLink>
      </ToolbarRoot>
    )
  },
}

export const WithInput: Story = {
  render: function WithInput() {
    const { t } = useTranslation()
    return (
      <ToolbarRoot aria-label={t('toolbar.searchToolbar')}>
        <ToolbarGroup aria-label={t('toolbar.formatting')}>
          <ToolbarButton aria-label={t('toolbar.bold')}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton aria-label={t('toolbar.italic')}>
            <Italic size={18} />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarInput
          placeholder={`${t('common.search')}…`}
          aria-label={t('common.search')}
          style={{ width: 160 }}
        />
      </ToolbarRoot>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <ToolbarRoot aria-label={t('toolbar.formattingToolbar')} disabled>
        <ToolbarButton aria-label={t('toolbar.bold')}>
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton aria-label={t('toolbar.italic')}>
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton aria-label={t('toolbar.underline')}>
          <Underline size={18} />
        </ToolbarButton>
      </ToolbarRoot>
    )
  },
}
