import clsx from 'clsx'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import styles from './Pagination.module.scss'

export interface PaginationProps extends React.ComponentProps<'nav'> {
  'aria-label'?: string
}

export function Pagination({
  className,
  'aria-label': ariaLabel = 'Pagination',
  ...props
}: PaginationProps) {
  return (
    <nav
      role='navigation'
      aria-label={ariaLabel}
      className={clsx(styles.root, className)}
      {...props}
    />
  )
}

export type PaginationContentProps = React.ComponentProps<'ul'>

export function PaginationContent({ className, ...props }: PaginationContentProps) {
  return <ul className={clsx(styles.content, className)} {...props} />
}

export type PaginationItemProps = React.ComponentProps<'li'>

export function PaginationItem({ className, ...props }: PaginationItemProps) {
  return <li className={clsx(styles.item, className)} {...props} />
}

export interface PaginationLinkProps extends React.ComponentProps<'a'> {
  isActive?: boolean
  size?: 'sm' | 'md'
}

export function PaginationLink({
  className,
  isActive,
  size = 'sm',
  'aria-current': ariaCurrent,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : ariaCurrent}
      data-active={isActive || undefined}
      data-size={size}
      className={clsx(styles.link, className)}
      {...props}
    />
  )
}

export interface PaginationPreviousProps extends PaginationLinkProps {
  text?: string
}

function isRtl() {
  return typeof document !== 'undefined' && document.documentElement.dir === 'rtl'
}

export function PaginationPrevious({ className, text, ...props }: PaginationPreviousProps) {
  const rtl = isRtl()
  const resolvedText = text ?? (rtl ? 'הקודם' : 'Previous')
  return (
    <PaginationLink
      aria-label={rtl ? 'עבור לעמוד הקודם' : 'Go to previous page'}
      className={clsx(styles.nav, className)}
      {...props}
    >
      <ChevronLeft size={16} aria-hidden />
      <span className={styles.navText}>{resolvedText}</span>
    </PaginationLink>
  )
}

export interface PaginationNextProps extends PaginationLinkProps {
  text?: string
}

export function PaginationNext({ className, text, ...props }: PaginationNextProps) {
  const rtl = isRtl()
  const resolvedText = text ?? (rtl ? 'הבא' : 'Next')
  return (
    <PaginationLink
      aria-label={rtl ? 'עבור לעמוד הבא' : 'Go to next page'}
      className={clsx(styles.nav, className)}
      {...props}
    >
      <span className={styles.navText}>{resolvedText}</span>
      <ChevronRight size={16} aria-hidden />
    </PaginationLink>
  )
}

export type PaginationEllipsisProps = React.ComponentProps<'span'>

export function PaginationEllipsis({ className, ...props }: PaginationEllipsisProps) {
  const rtl = isRtl()
  return (
    <span aria-hidden className={clsx(styles.ellipsis, className)} {...props}>
      <MoreHorizontal size={16} />
      <span className={styles.srOnly}>{rtl ? 'עמודים נוספים' : 'More pages'}</span>
    </span>
  )
}
