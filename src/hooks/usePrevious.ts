import { useState } from 'react'

/** Returns the value from the previous render, or `undefined` on the first render. */
export function usePrevious<T>(value: T): T | undefined {
  const [[current, previous], setState] = useState<[T, T | undefined]>([
    value,
    undefined,
  ])

  if (current !== value) {
    setState([value, current])
  }

  return previous
}
