import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import clsx from 'clsx'
import { Check, Copy, Terminal } from 'lucide-react'
import { useState } from 'react'
import styles from './CommandCopy.module.scss'

export type CommandCopyPackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

export type CommandCopyProps =
  | { command: string; commands?: never; className?: string }
  | {
      commands: Partial<Record<CommandCopyPackageManager, string>>
      command?: never
      className?: string
    }

const PM_ORDER: CommandCopyPackageManager[] = ['pnpm', 'npm', 'yarn', 'bun']

export function CommandCopy({
  command,
  commands,
  className,
}: CommandCopyProps) {
  const managers = commands
    ? (PM_ORDER.filter((pm) => pm in commands) as CommandCopyPackageManager[])
    : []

  const [activePm, setActivePm] = useState<CommandCopyPackageManager>(
    managers[0] ?? 'pnpm',
  )

  const [{ copied }, copy] = useCopyToClipboard(1500)

  const activeCommand = commands ? (commands[activePm] ?? '') : (command ?? '')

  return (
    <div className={clsx(styles.root, className)}>
      {managers.length > 0 && (
        <div
          className={styles.tabs}
          role='tablist'
          aria-label='Package manager'
        >
          {managers.map((pm) => (
            <button
              key={pm}
              role='tab'
              type='button'
              aria-selected={pm === activePm}
              className={styles.tab}
              onClick={() => setActivePm(pm)}
            >
              {pm}
            </button>
          ))}
        </div>
      )}

      <div className={styles.commandRow}>
        <Terminal size={13} className={styles.terminalIcon} aria-hidden />
        <code className={styles.command}>{activeCommand}</code>
        <button
          type='button'
          className={styles.copyButton}
          onClick={() => copy(activeCommand)}
          aria-label={copied ? 'Copied' : 'Copy command'}
        >
          {copied ? (
            <Check size={13} className={styles.checkIcon} />
          ) : (
            <Copy size={13} />
          )}
        </button>
      </div>
    </div>
  )
}
