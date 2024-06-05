import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Meal } from '@screens/Meal'
import { Feedback } from '@screens/Feedback'
import { Stats } from '@screens/Stats'
import { Show } from '@screens/Show'

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
        <Screen name="meal" component={Meal} />
        <Screen name="feedback" component={Feedback} />
        <Screen name="stats" component={Stats} />
        <Screen name="show" component={Show} />
      </Group>
    </Navigator>
  )
}
