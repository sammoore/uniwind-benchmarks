import { TamaguiProvider, setNativeStyleEngine } from '@tamagui/core'
import * as nativeRegistry from '@tamagui/native-registry'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'
import { config } from './src/tamagui.config'
import { ThemeRoot } from './src/theme'

if (nativeRegistry.isAvailable()) {
  setNativeStyleEngine(nativeRegistry)
}

const Root = () => (
  <TamaguiProvider config={config} defaultTheme="light">
    <ThemeRoot>
      <App />
    </ThemeRoot>
  </TamaguiProvider>
)

AppRegistry.registerComponent(appName, () => Root)
