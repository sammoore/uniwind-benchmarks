import { Text, View } from '@tamagui/core'
import { useBenchmark } from '@uniwind-benchmarks/benchmark'
import { Linking, ScrollView, Settings } from 'react-native'
import { setTheme } from './theme'

const scenarioSource = { Settings, Linking }

function App() {
  const { isComplete, currentRun, totalRuns, average, min, max, itemsCount, renderKey, runsLabel } =
    useBenchmark({ scenarioSource, setTheme })

  return (
    <View flex={1} marginTop={100} paddingHorizontal={12}>
      <Text
        fontSize={18}
        lineHeight="normal"
        fontWeight="bold"
        textAlign="center"
        marginBottom={16}
        color="typography"
      >
        Tamagui Benchmark
      </Text>

      {!isComplete ? (
        <View padding={16} backgroundColor="gray" borderRadius={8} marginBottom={16}>
          <Text
            fontSize={16}
            lineHeight="normal"
            fontWeight="600"
            textAlign="center"
            marginBottom={4}
            color="typography"
          >
            Running benchmark...
          </Text>
          <Text
            fontSize={16}
            lineHeight="normal"
            fontWeight="600"
            textAlign="center"
            marginBottom={4}
            color="typography"
          >
            {`Run ${currentRun + 1} of ${totalRuns}`}
          </Text>
        </View>
      ) : (
        <View padding={16} backgroundColor="gray" borderRadius={8} marginBottom={16}>
          <Text
            fontSize={16}
            lineHeight="normal"
            fontWeight="600"
            textAlign="center"
            marginBottom={4}
            color="typography"
          >
            ✓ Benchmark Complete
          </Text>
          <Text
            fontSize={16}
            lineHeight="normal"
            fontWeight="600"
            textAlign="center"
            marginBottom={4}
            color="typography"
          >
            {`Average: ${average.toFixed(2)}ms`}
          </Text>
          <Text
            fontSize={16}
            lineHeight="normal"
            fontWeight="600"
            textAlign="center"
            marginBottom={4}
            color="typography"
          >
            {`Min: ${min.toFixed(2)}ms`}
          </Text>
          <Text
            fontSize={16}
            lineHeight="normal"
            fontWeight="600"
            textAlign="center"
            marginBottom={4}
            color="typography"
          >
            {`Max: ${max.toFixed(2)}ms`}
          </Text>
          <Text
            fontSize={14}
            lineHeight="normal"
            textAlign="center"
            marginTop={8}
            color="typography"
          >
            {`${itemsCount * 2 + 3} views × ${totalRuns} ${runsLabel}`}
          </Text>
        </View>
      )}

      <ScrollView
        key={renderKey}
        contentContainerStyle={{ gap: 8, flexDirection: 'row', flexWrap: 'wrap' }}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: itemsCount }, (_, index) => (
          <View
            key={index}
            width="32%"
            height={100}
            borderRadius={16}
            backgroundColor="primary"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="typography" fontSize={16} lineHeight="normal" fontWeight="bold">
              {`${index}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default App
