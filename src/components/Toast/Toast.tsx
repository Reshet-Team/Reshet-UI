import { Toast as BaseToast } from '@base-ui/react/toast'
import type { ToastObject } from '@base-ui/react/toast'
import { X } from 'lucide-react'
import React from 'react'
import Primitives from './primitives'
import styles from './Toast.module.scss'
import { clsx } from 'clsx'

type AnyToast = ToastObject<object>

const ToastTitle = Primitives.Title
const ToastDescription = Primitives.Description
const ToastAction = Primitives.Action
const ToastClose = Primitives.Close
const ToastArrow = Primitives.Arrow

export interface ToastAnchoredContentProps {
  children?: React.ReactNode
  arrow?: boolean
  className?: string
}

function ToastAnchoredContent({
  children,
  arrow = true,
  className,
}: ToastAnchoredContentProps) {
  return (
    <div className={clsx(styles.anchoredContent, className)}>
      {arrow && <Primitives.Arrow />}
      {children}
    </div>
  )
}

function DefaultViewportToast({ toast }: { toast: AnyToast }) {
  return (
    <Primitives.Root toast={toast}>
      <Primitives.Content>
        <div className={styles.body}>
          {toast.title != null && (
            <Primitives.Title>{toast.title}</Primitives.Title>
          )}
          {toast.description != null && (
            <Primitives.Description>{toast.description}</Primitives.Description>
          )}
        </div>
        {toast.actionProps != null && (
          <Primitives.Action {...toast.actionProps} />
        )}
      </Primitives.Content>
      <Primitives.Close aria-label='Dismiss'>
        <X size={14} aria-hidden='true' />
      </Primitives.Close>
    </Primitives.Root>
  )
}

function DefaultAnchoredToast({ toast }: { toast: AnyToast }) {
  return (
    <Primitives.Root toast={toast} className={styles.anchoredRoot}>
      <ToastAnchoredContent>
        {toast.title != null && (
          <Primitives.Title>{toast.title}</Primitives.Title>
        )}
        {toast.description != null && (
          <Primitives.Description>{toast.description}</Primitives.Description>
        )}
      </ToastAnchoredContent>
    </Primitives.Root>
  )
}

function ToastList({
  renderAnchoredToast,
}: {
  renderAnchoredToast?: (toast: AnyToast) => React.ReactNode
}) {
  const { toasts } = BaseToast.useToastManager()

  const viewportToasts = toasts.filter((t) => t.positionerProps?.anchor == null)
  const anchoredToasts = toasts.filter((t) => t.positionerProps?.anchor != null)

  return (
    <>
      <Primitives.Viewport>
        {viewportToasts.map((toast) => (
          <DefaultViewportToast key={toast.id} toast={toast} />
        ))}
      </Primitives.Viewport>

      {anchoredToasts.length > 0 && (
        <BaseToast.Portal>
          {anchoredToasts.map((toast) => {
            const { anchor, ...positionerConfig } = toast.positionerProps ?? {}
            return (
              <Primitives.Positioner
                key={toast.id}
                toast={toast}
                anchor={anchor ?? null}
                side='top'
                sideOffset={8}
                {...positionerConfig}
              >
                {renderAnchoredToast ? (
                  <Primitives.Root toast={toast} className={styles.anchoredRoot}>
                    {renderAnchoredToast(toast)}
                  </Primitives.Root>
                ) : (
                  <DefaultAnchoredToast toast={toast} />
                )}
              </Primitives.Positioner>
            )
          })}
        </BaseToast.Portal>
      )}
    </>
  )
}

export interface ToastProviderProps extends BaseToast.Provider.Props {
  renderAnchoredToast?: (toast: AnyToast) => React.ReactNode
}

function ToastProvider({
  children,
  renderAnchoredToast,
  ...props
}: ToastProviderProps) {
  return (
    <Primitives.Provider {...props}>
      {children}
      <Primitives.Portal>
        <ToastList renderAnchoredToast={renderAnchoredToast} />
      </Primitives.Portal>
    </Primitives.Provider>
  )
}

export {
  ToastProvider,
  ToastAnchoredContent,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastArrow,
}
