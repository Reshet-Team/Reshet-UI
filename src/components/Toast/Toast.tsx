import { Toast as BaseToast } from '@base-ui/react/toast'
import type { ToastObject } from '@base-ui/react/toast'
import { X } from 'lucide-react'
import React from 'react'
import Primitives from './primitives'
import styles from './Toast.module.scss'

// ─── Composable parts (declared here so they can be exported below) ──────────

const ToastTitle = Primitives.Title
const ToastDescription = Primitives.Description
const ToastAction = Primitives.Action
const ToastClose = Primitives.Close
const ToastArrow = Primitives.Arrow

// ─── Default anchored appearance (tooltip-like) ──────────────────────────────

export interface ToastAnchoredContentProps {
  children?: React.ReactNode
  arrow?: boolean
  className?: string
}

export function ToastAnchoredContent({
  children,
  arrow = true,
  className,
}: ToastAnchoredContentProps) {
  return (
    <div className={`${styles.anchoredContent}${className ? ` ${className}` : ''}`}>
      {arrow && <Primitives.Arrow />}
      {children}
    </div>
  )
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

function DefaultViewportToast({ toast }: { toast: ToastObject }) {
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

function DefaultAnchoredToast({ toast }: { toast: ToastObject }) {
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
  renderAnchoredToast?: (toast: ToastObject) => React.ReactNode
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
                {renderAnchoredToast
                  ? renderAnchoredToast(toast)
                  : <DefaultAnchoredToast toast={toast} />}
              </Primitives.Positioner>
            )
          })}
        </BaseToast.Portal>
      )}
    </>
  )
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface ToastProviderProps extends BaseToast.Provider.Props {
  /**
   * Custom renderer for anchor-positioned toasts. Receives the toast object
   * and should return the content rendered inside Toast.Root. Defaults to a
   * tooltip-style card with an arrow.
   *
   * @example
   * renderAnchoredToast={(toast) => (
   *   <ToastAnchoredContent arrow>
   *     <ToastDescription>{toast.description}</ToastDescription>
   *   </ToastAnchoredContent>
   * )}
   */
  renderAnchoredToast?: (toast: ToastObject) => React.ReactNode
}

export function ToastProvider({
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
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastArrow,
}
