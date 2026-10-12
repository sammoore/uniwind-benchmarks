import { Theme } from '@tamagui/core'
import type { Theme as BenchmarkTheme } from '@uniwind-benchmarks/benchmark'
import { type ReactNode, useSyncExternalStore } from 'react'

// The app theme lives outside React, like in a real app with a theme switcher: only <ThemeRoot> re-renders when it
// changes, its children are created by the root component and keep their identity
let current: BenchmarkTheme = 'light'
const listeners = new Set<() => void>()

const subscribe = (listener: () => void) => {
  listeners.add(listener)

  return () => listeners.delete(listener)
}

export const setTheme = (theme: BenchmarkTheme) => {
  current = theme
  for (const listener of listeners) {
    listener()
  }
}

export function ThemeRoot({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, () => current)

  return <Theme name={theme}>{children}</Theme>
}
