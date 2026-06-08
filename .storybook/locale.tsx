/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import i18n from './i18n'

export type Locale = 'en' | 'he'

const LocaleContext = React.createContext<Locale>('en')

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  React.useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  return React.use(LocaleContext)
}
