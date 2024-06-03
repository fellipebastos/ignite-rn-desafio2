import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'

const { Navigator, Group, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group
        screenOptions={{
          animation: 'fade_from_bottom',
        }}
      >
        <Screen name="home" component={Home} />
        <Screen name="new" component={NewMeal} />
      </Group>
    </Navigator>
  )
}
