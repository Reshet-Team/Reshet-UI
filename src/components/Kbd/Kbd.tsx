import clsx from 'clsx'
import React from 'react'
import styles from './Kbd.module.scss'

export interface KbdProps extends React.ComponentProps<'kbd'> {
  className?: string
}

export interface KbdGroupProps extends React.ComponentProps<'div'> {
  className?: string
}

export type KbdPlatform = 'mac' | 'windows'

export type keyCode =
  | keyof (typeof KEY_ALIASES)['mac']
  | keyof (typeof KEY_ALIASES)['windows']
  | (string & {})

export interface KbdShortcutProps {
  keys: keyCode[]
  platform?: KbdPlatform
  className?: string
}

const KEY_ALIASES = {
  mac: {
    cmd: '⌘',
    command: '⌘',
    ctrl: '⌃',
    control: '⌃',
    alt: '⌥',
    option: '⌥',
    shift: '⇧',
    enter: '↵',
    return: '↵',
    backspace: '⌫',
    delete: '⌦',
    esc: 'Esc',
    escape: 'Esc',
    tab: '⇥',
    caps: '⇪',
    up: '↑',
    down: '↓',
    left: '←',
    right: '→',
  },
  windows: {
    win: '⊞',
    windows: '⊞',
    ctrl: 'Ctrl',
    control: 'Ctrl',
    alt: 'Alt',
    shift: 'Shift',
    enter: 'Enter',
    return: 'Enter',
    backspace: '⌫',
    delete: 'Del',
    esc: 'Esc',
    escape: 'Esc',
    tab: 'Tab',
    caps: 'Caps Lock',
    up: '↑',
    down: '↓',
    left: '←',
    right: '→',
  },
} as const

function resolveKey(key: keyCode, platform: KbdPlatform): string {
  const platformKeyMap = KEY_ALIASES[platform]
  return platformKeyMap[key.toLowerCase() as keyof typeof platformKeyMap] ?? key
}

function Kbd({ className, ...props }: KbdProps) {
  return <kbd data-slot='kbd' className={clsx(styles.kbd, className)} {...props} />
}

function KbdGroup({ className, ...props }: KbdGroupProps) {
  return <div data-slot='kbd-group' className={clsx(styles.group, className)} {...props} />
}

function KbdShortcut({ keys, platform = 'mac', className }: KbdShortcutProps) {
  return (
    <KbdGroup className={className}>
      {keys.map((key, i) => (
        <React.Fragment key={key}>
          {i > 0 && <span className={styles.separator}>+</span>}
          <Kbd>{resolveKey(key, platform)}</Kbd>
        </React.Fragment>
      ))}
    </KbdGroup>
  )
}

export { Kbd, KbdGroup, KbdShortcut }
