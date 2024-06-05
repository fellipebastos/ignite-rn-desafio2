import { getMealsStats } from '@storage/meal'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type StatsContextData = {
  count: number
  inDietCount: number
  outOfDietCount: number
  percentageInDiet: number
  sequenceInDietCount: number
  inDiet: boolean
  refreshStats: () => Promise<void>
}

type StatsProviderProps = {
  children: ReactNode
}

const StatsContext = createContext({} as StatsContextData)

export function StatsProvider({ children }: StatsProviderProps) {
  const [stats, setStats] = useState<Stats>({
    count: 0,
    inDietCount: 0,
    outOfDietCount: 0,
    percentageInDiet: 0,
    sequenceInDietCount: 0,
    inDiet: true,
  })

  async function refreshStats() {
    const statsResult = await getMealsStats()
    setStats({ ...statsResult, inDiet: statsResult.percentageInDiet >= 50 })
  }

  useEffect(() => {
    refreshStats()
  }, [])

  return (
    <StatsContext.Provider value={{ ...stats, refreshStats }}>
      {children}
    </StatsContext.Provider>
  )
}

export function useStats() {
  const context = useContext(StatsContext)

  if (!context) {
    throw new Error('useStats must be used within a StatsProvider')
  }

  return context
}
