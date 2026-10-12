const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { withTamagui } = require('@tamagui/metro-plugin')
const path = require('node:path')

const workspaceRoot = path.resolve(__dirname, '../../')

const config = getDefaultConfig(__dirname)
const customConfig = {
  watchFolders: [workspaceRoot],
}

// Options are read from tamagui.build.ts
module.exports = withTamagui(mergeConfig(config, customConfig))
