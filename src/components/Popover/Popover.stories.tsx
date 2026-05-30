import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import {
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from './Popover'

export default {
  title: 'Overlays/Popover',
  component: PopoverRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PopoverRoot>

type Story = StoryObj<typeof PopoverRoot>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <PopoverRoot>
        <PopoverTrigger>
          {t({ en: 'Notifications', he: 'התראות' })}
        </PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>
            {t({ en: 'Notifications', he: 'התראות' })}
          </PopoverTitle>
          <PopoverDescription>
            {t({
              en: 'You are all caught up. Good job!',
              he: 'אתה מעודכן בהכל. כל הכבוד!',
            })}
          </PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const WithClose: Story = {
  render: function WithClose() {
    const t = useT()
    return (
      <PopoverRoot>
        <PopoverTrigger>
          {t({ en: 'Open popover', he: 'פתח חלונית' })}
        </PopoverTrigger>
        <PopoverContent>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <PopoverTitle>{t({ en: 'Settings', he: 'הגדרות' })}</PopoverTitle>
            <PopoverClose aria-label={t({ en: 'Close', he: 'סגור' })}>
              ✕
            </PopoverClose>
          </div>
          <PopoverDescription>
            {t({
              en: 'Manage your notification preferences.',
              he: 'נהל את העדפות ההתראות שלך.',
            })}
          </PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const TopPlacement: Story = {
  render: function TopPlacement() {
    const t = useT()
    return (
      <div style={{ paddingTop: 80 }}>
        <PopoverRoot>
          <PopoverTrigger>
            {t({ en: 'Open above', he: 'פתח מעל' })}
          </PopoverTrigger>
          <PopoverContent side='top'>
            <PopoverTitle>
              {t({ en: 'Top popover', he: 'חלונית עליונה' })}
            </PopoverTitle>
            <PopoverDescription>
              {t({
                en: 'This popover appears above the trigger.',
                he: 'חלונית זו מופיעה מעל הכפתור.',
              })}
            </PopoverDescription>
          </PopoverContent>
        </PopoverRoot>
      </div>
    )
  },
}

export const NoArrow: Story = {
  render: function NoArrow() {
    const t = useT()
    return (
      <PopoverRoot>
        <PopoverTrigger>{t({ en: 'No arrow', he: 'ללא חץ' })}</PopoverTrigger>
        <PopoverContent arrow={false}>
          <PopoverTitle>
            {t({ en: 'Clean popover', he: 'חלונית נקייה' })}
          </PopoverTitle>
          <PopoverDescription>
            {t({
              en: 'This popover has no arrow indicator.',
              he: 'לחלונית זו אין חץ מחוון.',
            })}
          </PopoverDescription>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const MultiplePopovers: Story = {
  render: function MultiplePopovers() {
    const t = useT()
    const tools = [
      {
        id: 'font',
        label: t({ en: 'Font', he: 'גופן' }),
        title: t({ en: 'Font settings', he: 'הגדרות גופן' }),
        description: t({
          en: 'Choose a typeface and size for your document.',
          he: 'בחר גופן וגודל עבור המסמך שלך.',
        }),
      },
      {
        id: 'color',
        label: t({ en: 'Color', he: 'צבע' }),
        title: t({ en: 'Color palette', he: 'לוח צבעים' }),
        description: t({
          en: 'Pick an accent color to apply to headings and links.',
          he: 'בחר צבע הדגשה להחלה על כותרות וקישורים.',
        }),
      },
      {
        id: 'layout',
        label: t({ en: 'Layout', he: 'פריסה' }),
        title: t({ en: 'Page layout', he: 'פריסת עמוד' }),
        description: t({
          en: 'Adjust margins, columns, and spacing for this page.',
          he: 'כוון שוליים, עמודות ומרווחים עבור עמוד זה.',
        }),
      },
    ]
    return (
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-2)',
          paddingBlock: 80,
          justifyContent: 'center',
        }}
      >
        {tools.map((tool) => (
          <PopoverRoot key={tool.id}>
            <PopoverTrigger>{tool.label}</PopoverTrigger>
            <PopoverContent>
              <PopoverTitle>{tool.title}</PopoverTitle>
              <PopoverDescription>{tool.description}</PopoverDescription>
            </PopoverContent>
          </PopoverRoot>
        ))}
      </div>
    )
  },
}
