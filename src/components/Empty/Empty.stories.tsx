import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import { Button } from '../Button/Button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './Empty'

export default {
  title: 'Display/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Empty>

type Story = StoryObj<typeof Empty>

const FolderIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' />
  </svg>
)

const SearchIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='11' cy='11' r='8' />
    <path d='m21 21-4.35-4.35' />
  </svg>
)

const InboxIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
    <path d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
  </svg>
)

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <FolderIcon />
          </EmptyMedia>
          <EmptyTitle>
            {t({ en: 'No files found', he: 'לא נמצאו קבצים' })}
          </EmptyTitle>
          <EmptyDescription>
            {t({
              en: "You haven't uploaded any files yet. Upload a file to get started.",
              he: 'עדיין לא העלאת קבצים. העלה קובץ כדי להתחיל.',
            })}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>{t({ en: 'Upload file', he: 'העלה קובץ' })}</Button>
        </EmptyContent>
      </Empty>
    )
  },
}

export const NoResults: Story = {
  render: function NoResults() {
    const t = useT()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <SearchIcon />
          </EmptyMedia>
          <EmptyTitle>
            {t({ en: 'No results found', he: 'לא נמצאו תוצאות' })}
          </EmptyTitle>
          <EmptyDescription>
            {t({
              en: "We couldn't find anything matching your search. Try different keywords.",
              he: 'לא מצאנו דבר התואם לחיפוש שלך. נסה מילות מפתח אחרות.',
            })}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  },
}

export const Inbox: Story = {
  render: function Inbox() {
    const t = useT()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='default'>
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>
            {t({ en: 'Your inbox is empty', he: 'תיבת הדואר שלך ריקה' })}
          </EmptyTitle>
          <EmptyDescription>
            {t({
              en: "When you receive messages, they'll appear here.",
              he: 'כשתקבל הודעות, הן יופיעו כאן.',
            })}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  },
}

export const WithMultipleActions: Story = {
  render: function WithMultipleActions() {
    const t = useT()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <FolderIcon />
          </EmptyMedia>
          <EmptyTitle>
            {t({ en: 'No projects yet', he: 'אין פרויקטים עדיין' })}
          </EmptyTitle>
          <EmptyDescription>
            {t({
              en: 'Create a project to start organizing your work with your team.',
              he: 'צור פרויקט כדי להתחיל לארגן את העבודה שלך עם הצוות.',
            })}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>{t({ en: 'Create project', he: 'צור פרויקט' })}</Button>
          <Button variant='ghost'>
            {t({ en: 'Learn more', he: 'למד עוד' })}
          </Button>
        </EmptyContent>
      </Empty>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    return (
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <div
          style={{
            width: 320,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant='icon'>
                <FolderIcon />
              </EmptyMedia>
              <EmptyTitle>
                {t({ en: 'Icon variant', he: 'וריאנט אייקון' })}
              </EmptyTitle>
              <EmptyDescription>
                {t({
                  en: 'Uses a bordered square with subtle background.',
                  he: 'משתמש בריבוע עם גבול ורקע עדין.',
                })}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>{t({ en: 'Action', he: 'פעולה' })}</Button>
            </EmptyContent>
          </Empty>
        </div>
        <div
          style={{
            width: 320,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant='default'>
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>
                {t({ en: 'Default variant', he: 'וריאנט ברירת מחדל' })}
              </EmptyTitle>
              <EmptyDescription>
                {t({
                  en: 'Uses a larger circular container with elevated background.',
                  he: 'משתמש במיכל עגול גדול יותר עם רקע מוגבה.',
                })}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>{t({ en: 'Action', he: 'פעולה' })}</Button>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    )
  },
}
