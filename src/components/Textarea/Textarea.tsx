import clsx from 'clsx'
import styles from './Textarea.module.scss'

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resize?: TextareaResize
  invalid?: boolean
}

export function Textarea({
  resize = 'none',
  invalid,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={clsx(styles.textarea, className)}
      data-resize={resize}
      data-invalid={invalid || undefined}
      {...props}
    />
  )
}
