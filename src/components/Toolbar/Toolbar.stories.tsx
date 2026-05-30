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
import { useT } from '../../../.storybook/locale'
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '../Menu/Menu'
import { NumberFieldInput, NumberFieldRoot } from '../NumberField/NumberField'
import {
  SelectItem,
  SelectList,
  SelectRoot,
  SelectTrigger,
} from '../Select/Select'
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
    const t = useT()
    return (
      <ToolbarRoot
        aria-label={t({ en: 'Formatting toolbar', he: 'סרגל עיצוב' })}
      >
        <ToggleGroup
          multiple
          defaultValue={['bold']}
          aria-label={t({ en: 'Text style', he: 'סגנון טקסט' })}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton
            render={<Toggle />}
            value='bold'
            aria-label={t({ en: 'Bold', he: 'מודגש' })}
          >
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='italic'
            aria-label={t({ en: 'Italic', he: 'נטוי' })}
          >
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='underline'
            aria-label={t({ en: 'Underline', he: 'קו תחתון' })}
          >
            <Underline size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToggleGroup
          defaultValue={['left']}
          aria-label={t({ en: 'Text alignment', he: 'יישור טקסט' })}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton
            render={<Toggle />}
            value='left'
            aria-label={t({ en: 'Align left', he: 'יישר שמאלה' })}
          >
            <AlignLeft size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='right'
            aria-label={t({ en: 'Align right', he: 'יישר ימינה' })}
          >
            <AlignRight size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label={t({ en: 'Actions', he: 'פעולות' })}>
          <ToolbarButton
            aria-label={t({ en: 'More options', he: 'אפשרויות נוספות' })}
            style={{ paddingInline: 8, gap: 4 }}
          >
            {t({ en: 'Options', he: 'אפשרויות' })} <ChevronDown size={14} />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarLink
          href='#'
          style={{ marginInlineStart: 'auto', marginInlineEnd: 8 }}
        >
          {t({ en: 'Last saved 2m ago', he: 'נשמר לאחרונה לפני 2 דקות' })}
        </ToolbarLink>
      </ToolbarRoot>
    )
  },
}

export const WithMenu: Story = {
  render: function WithMenu() {
    const t = useT()
    return (
      <ToolbarRoot
        aria-label={t({ en: 'Rich text toolbar', he: 'סרגל טקסט עשיר' })}
      >
        <MenuRoot>
          <ToolbarButton
            render={<MenuTrigger />}
            style={{
              paddingInline: 'var(--space-3)',
              gap: 'var(--space-2)',
              minWidth: 120,
            }}
          >
            {t({ en: 'Paragraph', he: 'פסקה' })}{' '}
            <ChevronDown size={14} aria-hidden />
          </ToolbarButton>
          <MenuContent>
            <MenuItem>{t({ en: 'Normal text', he: 'טקסט רגיל' })}</MenuItem>
            <MenuItem>{t({ en: 'Heading 1', he: 'כותרת 1' })}</MenuItem>
            <MenuItem>{t({ en: 'Heading 2', he: 'כותרת 2' })}</MenuItem>
            <MenuItem>{t({ en: 'Heading 3', he: 'כותרת 3' })}</MenuItem>
            <MenuSeparator />
            <MenuItem>{t({ en: 'Code block', he: 'בלוק קוד' })}</MenuItem>
            <MenuItem>{t({ en: 'Quote', he: 'ציטוט' })}</MenuItem>
          </MenuContent>
        </MenuRoot>
        <ToolbarSeparator />
        <ToggleGroup
          multiple
          defaultValue={['bold']}
          aria-label={t({ en: 'Text style', he: 'סגנון טקסט' })}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton
            render={<Toggle />}
            value='bold'
            aria-label={t({ en: 'Bold', he: 'מודגש' })}
          >
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='italic'
            aria-label={t({ en: 'Italic', he: 'נטוי' })}
          >
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='underline'
            aria-label={t({ en: 'Underline', he: 'קו תחתון' })}
          >
            <Underline size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <MenuRoot>
          <ToolbarButton
            render={<MenuTrigger />}
            style={{ paddingInline: 'var(--space-3)', gap: 'var(--space-2)' }}
          >
            {t({ en: 'Insert', he: 'הוסף' })}{' '}
            <ChevronDown size={14} aria-hidden />
          </ToolbarButton>
          <MenuContent>
            <MenuItem>
              <Image size={14} aria-hidden /> {t({ en: 'Image', he: 'תמונה' })}
            </MenuItem>
            <MenuItem>
              <Link size={14} aria-hidden /> {t({ en: 'Link', he: 'קישור' })}
            </MenuItem>
            <MenuItem>
              <Table size={14} aria-hidden /> {t({ en: 'Table', he: 'טבלה' })}
            </MenuItem>
            <MenuSeparator />
            <MenuItem>{t({ en: 'Horizontal rule', he: 'קו אופקי' })}</MenuItem>
          </MenuContent>
        </MenuRoot>
      </ToolbarRoot>
    )
  },
}

export const WithSelect: Story = {
  render: function WithSelect() {
    const t = useT()
    return (
      <ToolbarRoot
        aria-label={t({ en: 'Text formatting toolbar', he: 'סרגל עיצוב טקסט' })}
      >
        <SelectRoot defaultValue='sans'>
          <ToolbarButton
            render={
              <SelectTrigger
                size='sm'
                placeholder={t({ en: 'Font', he: 'גופן' })}
              />
            }
          />
          <SelectList>
            <SelectItem value='sans'>Sans-serif</SelectItem>
            <SelectItem value='serif'>Serif</SelectItem>
            <SelectItem value='mono'>Monospace</SelectItem>
          </SelectList>
        </SelectRoot>
        <ToolbarSeparator />
        <SelectRoot defaultValue='16'>
          <ToolbarButton
            render={<SelectTrigger size='sm' />}
            style={{ minWidth: 72 }}
          />
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
          aria-label={t({ en: 'Text style', he: 'סגנון טקסט' })}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton
            render={<Toggle />}
            value='bold'
            aria-label={t({ en: 'Bold', he: 'מודגש' })}
          >
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='italic'
            aria-label={t({ en: 'Italic', he: 'נטוי' })}
          >
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='underline'
            aria-label={t({ en: 'Underline', he: 'קו תחתון' })}
          >
            <Underline size={18} />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToggleGroup
          defaultValue={['left']}
          aria-label={t({ en: 'Text alignment', he: 'יישור טקסט' })}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            gap: 1,
          }}
        >
          <ToolbarButton
            render={<Toggle />}
            value='left'
            aria-label={t({ en: 'Align left', he: 'יישר שמאלה' })}
          >
            <AlignLeft size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='center'
            aria-label={t({ en: 'Align center', he: 'יישר למרכז' })}
          >
            <AlignCenter size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='right'
            aria-label={t({ en: 'Align right', he: 'יישר ימינה' })}
          >
            <AlignRight size={18} />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle />}
            value='justify'
            aria-label={t({ en: 'Justify', he: 'יישר לשני הצדדים' })}
          >
            <AlignJustify size={18} />
          </ToolbarButton>
        </ToggleGroup>
      </ToolbarRoot>
    )
  },
}

export const WithInputs: Story = {
  render: function WithInputs() {
    const t = useT()
    return (
      <ToolbarRoot aria-label={t({ en: 'Document toolbar', he: 'סרגל מסמך' })}>
        <ToolbarGroup aria-label={t({ en: 'Zoom', he: 'זום' })}>
          <ToolbarButton aria-label={t({ en: 'Zoom out', he: 'הקטן' })}>
            <ZoomOut size={18} />
          </ToolbarButton>
          <NumberFieldRoot
            defaultValue={100}
            min={10}
            max={400}
            aria-label={t({ en: 'Zoom percent', he: 'אחוז זום' })}
          >
            <ToolbarInput
              render={<NumberFieldInput />}
              style={{ width: 52, textAlign: 'center' }}
            />
          </NumberFieldRoot>
          <ToolbarButton aria-label={t({ en: 'Zoom in', he: 'הגדל' })}>
            <ZoomIn size={18} />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarInput
          type='text'
          placeholder={t({ en: 'Find in document…', he: 'חפש במסמך…' })}
          aria-label={t({ en: 'Search', he: 'חיפוש' })}
          style={{ width: 200 }}
        />
        <ToolbarSeparator />
        <ToolbarButton style={{ paddingInline: 8, gap: 6 }}>
          <Search size={16} /> {t({ en: 'Find all', he: 'מצא הכל' })}
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarLink href='#'>{t({ en: 'Help', he: 'עזרה' })}</ToolbarLink>
      </ToolbarRoot>
    )
  },
}

export const WithInput: Story = {
  render: function WithInput() {
    const t = useT()
    return (
      <ToolbarRoot aria-label={t({ en: 'Search toolbar', he: 'סרגל חיפוש' })}>
        <ToolbarGroup aria-label={t({ en: 'Formatting', he: 'עיצוב' })}>
          <ToolbarButton aria-label={t({ en: 'Bold', he: 'מודגש' })}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton aria-label={t({ en: 'Italic', he: 'נטוי' })}>
            <Italic size={18} />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarInput
          placeholder={t({ en: 'Search…', he: 'חיפוש…' })}
          aria-label={t({ en: 'Search', he: 'חיפוש' })}
          style={{ width: 160 }}
        />
      </ToolbarRoot>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <ToolbarRoot
        aria-label={t({ en: 'Formatting toolbar', he: 'סרגל עיצוב' })}
        disabled
      >
        <ToolbarButton aria-label={t({ en: 'Bold', he: 'מודגש' })}>
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton aria-label={t({ en: 'Italic', he: 'נטוי' })}>
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton aria-label={t({ en: 'Underline', he: 'קו תחתון' })}>
          <Underline size={18} />
        </ToolbarButton>
      </ToolbarRoot>
    )
  },
}
