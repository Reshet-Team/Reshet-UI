import clsx from 'clsx'
import React, { createContext, use } from 'react'
import styles from './Steps.module.scss'

interface StepsContextValue {
  value: number
  onValueChange: (value: number) => void
  orientation: StepsOrientation
}

const StepsContext = createContext<StepsContextValue | null>(null)

function useStepsContext() {
  const ctx = use(StepsContext)
  if (!ctx) throw new Error('Steps components must be used inside <StepsRoot>')
  return ctx
}

interface StepItemContextValue {
  step: number
  isActive: boolean
  isCompleted: boolean
  isDisabled: boolean
}

const StepItemContext = createContext<StepItemContextValue | null>(null)

function useStepItemContext() {
  const ctx = use(StepItemContext)
  if (!ctx) throw new Error('StepsItem sub-components must be used inside <StepsItem>')
  return ctx
}

export type StepsOrientation = 'horizontal' | 'vertical'

export interface StepsRootProps {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  orientation?: StepsOrientation
  className?: string
  children: React.ReactNode
}

export function StepsRoot({
  value: controlledValue,
  defaultValue = 1,
  onValueChange,
  orientation = 'horizontal',
  className,
  children,
}: StepsRootProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  function handleValueChange(next: number) {
    if (!isControlled) setInternalValue(next)
    onValueChange?.(next)
  }

  return (
    <StepsContext.Provider value={{ value, onValueChange: handleValueChange, orientation }}>
      <div className={clsx(styles.root, className)} data-orientation={orientation}>
        {children}
      </div>
    </StepsContext.Provider>
  )
}

export interface StepsListProps extends React.HTMLAttributes<HTMLOListElement> {
  children: React.ReactNode
}

export function StepsList({ className, children, ...props }: StepsListProps) {
  const { orientation } = useStepsContext()
  return (
    <ol
      className={clsx(styles.list, className)}
      data-orientation={orientation}
      aria-label='Steps'
      {...props}
    >
      {children}
    </ol>
  )
}

export interface StepsItemProps extends React.HTMLAttributes<HTMLLIElement> {
  step: number
  completed?: boolean
  disabled?: boolean
  children: React.ReactNode
}

export function StepsItem({
  step,
  completed,
  disabled = false,
  className,
  children,
  ...props
}: StepsItemProps) {
  const { value, orientation } = useStepsContext()
  const isActive = value === step
  const isCompleted = completed !== undefined ? completed : value > step

  return (
    <StepItemContext.Provider value={{ step, isActive, isCompleted, isDisabled: disabled }}>
      <li
        className={clsx(styles.item, className)}
        data-orientation={orientation}
        data-active={isActive || undefined}
        data-completed={isCompleted || undefined}
        data-disabled={disabled || undefined}
        {...props}
      >
        {children}
      </li>
    </StepItemContext.Provider>
  )
}

export interface StepsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function StepsTrigger({ className, children, onClick, ...props }: StepsTriggerProps) {
  const { onValueChange } = useStepsContext()
  const { step, isDisabled } = useStepItemContext()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!isDisabled) onValueChange(step)
    onClick?.(e)
  }

  return (
    <button
      type='button'
      className={clsx(styles.trigger, className)}
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export interface StepsIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function StepsIndicator({ className, children, ...props }: StepsIndicatorProps) {
  const { isActive, isCompleted, step } = useStepItemContext()

  return (
    <span
      className={clsx(styles.indicator, className)}
      data-active={isActive || undefined}
      data-completed={isCompleted || undefined}
      aria-hidden
      {...props}
    >
      {children ?? step}
    </span>
  )
}

export type StepsSeparatorProps = React.HTMLAttributes<HTMLDivElement>

export function StepsSeparator({ className, ...props }: StepsSeparatorProps) {
  const { orientation } = useStepsContext()
  const { isCompleted } = useStepItemContext()

  return (
    <div
      role='none'
      className={clsx(styles.separator, className)}
      data-orientation={orientation}
      data-completed={isCompleted || undefined}
      {...props}
    />
  )
}

export interface StepsTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function StepsTitle({ className, children, ...props }: StepsTitleProps) {
  const { isActive, isCompleted } = useStepItemContext()
  return (
    <span
      className={clsx(styles.title, className)}
      data-active={isActive || undefined}
      data-completed={isCompleted || undefined}
      {...props}
    >
      {children}
    </span>
  )
}

export interface StepsDescriptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function StepsDescription({ className, children, ...props }: StepsDescriptionProps) {
  return (
    <span className={clsx(styles.description, className)} {...props}>
      {children}
    </span>
  )
}
