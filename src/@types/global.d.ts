type Meal = {
  id: string
  name: string
  description: string
  date: string
  hour: string
  inDiet: boolean
}

type MealDateGroupItem = Omit<Meal, 'date'>

type MealDateGroup = {
  date: string
  data: MealDateGroupItem[]
}

type Stats = {
  count: number
  inDietCount: number
  outOfDietCount: number
  percentageInDiet: number
  sequenceInDietCount: number
  inDiet: boolean
}
