import { useCallback, useLayoutEffect, useRef, useState } from 'react'

export interface UseControllableStateParams<T> {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}

/**
 * Manages state that works in both controlled (`value` prop) and uncontrolled (`defaultValue`) modes.
 * Calls `onChange` on every update regardless of mode.
 */
export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateParams<T>): [T | undefined, (next: T) => void] {
  const [uncontrolled, setUncontrolled] = useState<T | undefined>(defaultValue)
  const isControlled = value !== undefined
  const current = isControlled ? value : uncontrolled
  const onChangeRef = useRef(onChange)

  useLayoutEffect(() => {
    onChangeRef.current = onChange
  })

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolled(next)
      onChangeRef.current?.(next)
    },
    [isControlled],
  )

  return [current, setValue]
}
