import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/**
 * Observes `target` with `IntersectionObserver` and returns the latest `IntersectionObserverEntry`.
 * Note: `options` changes after mount are intentionally ignored to avoid resubscription when callers
 * pass inline objects. The observer is only recreated when `target` changes.
 */
export function useIntersectionObserver(
  target: Element | null,
  options?: IntersectionObserverInit,
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const optionsRef = useRef(options)

  useLayoutEffect(() => {
    optionsRef.current = options
  })

  useEffect(() => {
    if (!target) return
    const observer = new IntersectionObserver(
      ([e]) => setEntry(e),
      optionsRef.current,
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [target])

  return entry
}
