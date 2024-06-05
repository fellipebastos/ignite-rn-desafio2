import AsyncStorage from '@react-native-async-storage/async-storage'

const MEAL_COLLECTION = '@daily-diet:meals'

export async function getAllMeals() {
  const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

  if (!storedMeals) return []

  const meals: Meal[] = JSON.parse(storedMeals)

  meals.sort(
    (a: Meal, b: Meal) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return meals
}

export async function getAllMealsGroupedByDate() {
  const meals = await getAllMeals()

  return meals.reduce<MealDateGroup[]>((acc, { date, ...meal }) => {
    const dateIndex = acc.findIndex((group) => group.date === date)

    if (dateIndex !== -1) {
      acc[dateIndex].data.push(meal)
    } else {
      acc.push({ date, data: [meal] })
    }

    return acc
  }, [])
}

export async function getMealById(id: string) {
  const meals = await getAllMeals()

  return meals.find((meal) => meal.id === id)
}

export async function getMealsStats() {
  const meals = await getAllMeals()

  const count = meals.length
  const inDietCount = meals.filter((meal) => meal.inDiet).length
  const outOfDietCount = meals.filter((meal) => !meal.inDiet).length
  const percentageInDiet = (inDietCount / meals.length || 0) * 100

  const sequenceInDietCount = meals.reduce<{ best: number; current: number }>(
    (acc, meal) => {
      if (meal.inDiet) {
        acc.current += 1
        return acc
      }

      if (acc.current > acc.best) {
        acc.best = acc.current
      }

      acc.current = 0

      return acc
    },
    { best: 0, current: 0 },
  ).best

  const stats: Omit<Stats, 'inDiet'> = {
    count,
    inDietCount,
    outOfDietCount,
    percentageInDiet,
    sequenceInDietCount,
  }

  return stats
}

export async function createMeal(meal: Meal) {
  const meals = await getAllMeals()

  meals.push(meal)

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
}

export async function updateMeal(updateMeal: Meal) {
  const meals = await getAllMeals()

  const updateMealIndex = meals.findIndex((meal) => meal.id === updateMeal.id)

  if (updateMealIndex === -1) {
    throw new Error('Meal not found')
  }

  meals[updateMealIndex] = updateMeal

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
}

export async function deleteMeal(id: string) {
  const meals = await getAllMeals()

  const updatedMeals = meals.filter((meal) => meal.id !== id)

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals))
}
