import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <FolderIcon />
          </EmptyMedia>
          <EmptyTitle>{t('empty.noFilesFound')}</EmptyTitle>
          <EmptyDescription>{t('empty.noFilesDesc')}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>{t('common.create')}</Button>
        </EmptyContent>
      </Empty>
    )
  },
}

export const NoResults: Story = {
  render: function NoResults() {
    const { t } = useTranslation()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <SearchIcon />
          </EmptyMedia>
          <EmptyTitle>{t('empty.noResultsFound')}</EmptyTitle>
          <EmptyDescription>{t('empty.noResultsDesc')}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  },
}

export const Inbox: Story = {
  render: function Inbox() {
    const { t } = useTranslation()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='default'>
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>{t('empty.yourInboxIsEmpty')}</EmptyTitle>
          <EmptyDescription>{t('empty.inboxDesc')}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  },
}

export const WithMultipleActions: Story = {
  render: function WithMultipleActions() {
    const { t } = useTranslation()
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <FolderIcon />
          </EmptyMedia>
          <EmptyTitle>{t('empty.noProjectsYet')}</EmptyTitle>
          <EmptyDescription>{t('empty.noProjectsDesc')}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>{t('empty.createProject')}</Button>
          <Button variant='ghost'>{t('common.more')}</Button>
        </EmptyContent>
      </Empty>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
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
              <EmptyTitle>{t('empty.iconVariant')}</EmptyTitle>
              <EmptyDescription>{t('empty.noFilesDesc')}</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>{t('empty.action')}</Button>
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
              <EmptyTitle>{t('empty.defaultVariant')}</EmptyTitle>
              <EmptyDescription>{t('empty.inboxDesc')}</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>{t('empty.action')}</Button>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    )
  },
}
