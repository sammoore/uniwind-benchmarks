import { createTamagui, createTokens } from '@tamagui/core'

const tokens = createTokens({
  color: {},
  space: {},
  size: {},
  radius: {},
  zIndex: {},
})

export const config = createTamagui({
  tokens,
  themes: {
    light: {
      primary: '#00a8ff',
      gray: '#f0f0f0',
      typography: '#000',
    },
    dark: {
      primary: '#273c75',
      gray: '#353b48',
      typography: '#fff',
    },
  },
  settings: {
    disableSSR: true,
  },
})

type AppConfig = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
