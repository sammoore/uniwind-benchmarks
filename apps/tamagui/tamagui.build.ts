import type { TamaguiBuildOptions } from '@tamagui/core'

export default {
  config: './src/tamagui.config.ts',
  components: ['@tamagui/core'],
  experimental: {
    // Theme changes go to the views through the C++ registry (@tamagui/native-registry), without re-rendering them
    nativeFastPath: true,
  },
} satisfies TamaguiBuildOptions
