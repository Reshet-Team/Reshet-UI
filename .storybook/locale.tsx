/* eslint-disable react-refresh/only-export-components */
import React from 'react'

export type Locale = 'en' | 'he'

export type LocaleStrings = { en: string; he: string }

const LocaleContext = React.createContext<Locale>('en')

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  return React.use(LocaleContext)
}

export function useT(): (strings: LocaleStrings) => string {
  const locale = useLocale()
  return (strings) => strings[locale]
}
