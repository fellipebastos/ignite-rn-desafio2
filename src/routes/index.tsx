import { NavigationContainer } from '@react-navigation/native'

import { StatsProvider } from '../providers/StatsProvider'

import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <StatsProvider>
        <AppRoutes />
      </StatsProvider>
    </NavigationContainer>
  )
}
