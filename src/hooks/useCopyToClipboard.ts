import { useCallback, useEffect, useRef, useState } from 'react'

export interface CopyState {
  copied: boolean
  error: Error | null
}

/** Copies text to the clipboard. Returns `{ copied, error }` state that resets after `resetDelay` ms. */
export function useCopyToClipboard(
  resetDelay = 2000,
): [CopyState, (text: string) => Promise<void>] {
  const [state, setState] = useState<CopyState>({ copied: false, error: null })
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setState({ copied: true, error: null })
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(
          () => setState({ copied: false, error: null }),
          resetDelay,
        )
      } catch (error) {
        setState({
          copied: false,
          error: error instanceof Error ? error : new Error(String(error)),
        })
      }
    },
    [resetDelay],
  )

  return [state, copy]
}
