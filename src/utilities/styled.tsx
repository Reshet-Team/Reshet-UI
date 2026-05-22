import clsx from 'clsx'
import React from 'react'

type AnyComponent = React.ComponentType<{ className?: string }>

/**
 * Binds a base CSS module class to a component while preserving its full type.
 * Any `className` passed at usage-time is merged in via clsx.
 */
export function styled<C extends AnyComponent>(
  Component: C,
  baseClass: string,
): C {
  const Styled = ({ className, ...props }: { className?: string }) =>
    React.createElement(Component, {
      className: clsx(baseClass, className),
      ...props,
    })

  const c = Component as { displayName?: string; name?: string }
  Styled.displayName = `Styled(${c.displayName ?? c.name ?? 'Component'})`

  return Styled as unknown as C
}
