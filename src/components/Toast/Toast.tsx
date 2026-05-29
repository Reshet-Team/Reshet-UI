import { Toast as BaseToast } from '@base-ui/react/toast'
import { X } from 'lucide-react'
import React from 'react'
import Primitives from './primitives'
import styles from './Toast.module.scss'

function ToastList() {
  const { toasts } = BaseToast.useToastManager()

  return (
    <>
      {toasts.map((toast) => (
        <Primitives.Root key={toast.id} toast={toast}>
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
      ))}
    </>
  )
}

export type ToastProviderProps = BaseToast.Provider.Props

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <Primitives.Provider {...props}>
      {children}
      <Primitives.Portal>
        <Primitives.Viewport>
          <ToastList />
        </Primitives.Viewport>
      </Primitives.Portal>
    </Primitives.Provider>
  )
}
