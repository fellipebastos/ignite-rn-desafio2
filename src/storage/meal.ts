import AsyncStorage from '@react-native-async-storage/async-storage'

const MEAL_COLLECTION = '@daily-diet:meals'

export async function getAllMeals() {
  const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

  const meals: Meal[] = storedMeals ? JSON.parse(storedMeals) : []

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

export async function createMeal(meal: Meal) {
  const meals = await getAllMeals()

  meals.push(meal)

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
}

export async function deleteMeal(id: string) {
  const meals = await getAllMeals()

  const updatedMeals = meals.filter((meal) => meal.id !== id)

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals))
}
