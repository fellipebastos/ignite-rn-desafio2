import { useCallback, useState } from 'react'
import { SectionListData, SectionListRenderItemInfo } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'

import { getAllMealsGroupedByDate } from '@storage/meal'

import { Header } from '@components/Header'
import { Card } from '@components/Card'
import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Page } from '@components/Page'
import { CardMeal } from '@components/CardMeal'

import {
  AddMealContainer,
  CardContainer,
  HomeCardArrowIcon,
  MealsList,
  MealsListTitle,
} from './styles'

export function Home() {
  const navigation = useNavigation()

  const [mealSections, setMealSections] = useState<MealDateGroup[]>([])

  function handleGoToStats() {
    navigation.navigate('stats')
  }

  function handleCreateMeal() {
    navigation.navigate('meal')
  }

  function handleShowMeal(id: string) {
    navigation.navigate('show', { id })
  }

  function formatMealGroups(mealGroups: MealDateGroup[]) {
    return mealGroups.map((mealGroup) => ({
      ...mealGroup,
      date: mealGroup.date.replace(/\//g, '.'),
    }))
  }

  async function fetchMeals() {
    const mealGroups = await getAllMealsGroupedByDate()

    setMealSections(formatMealGroups(mealGroups))
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Page.Container>
      <Page.Content>
        <Header />

        <CardContainer onPress={handleGoToStats}>
          <Card.Root variant="positive">
            <HomeCardArrowIcon variant="positive" />
            <Card.Title size="LG">90,86%</Card.Title>
            <Card.Description>das refeições dentro da dieta</Card.Description>
          </Card.Root>
        </CardContainer>

        <AddMealContainer>
          <Text>Refeições</Text>
          <Button
            title="Nova refeição"
            icon={Plus}
            onPress={handleCreateMeal}
          />
        </AddMealContainer>

        <MealsList
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={mealSections}
          keyExtractor={(item: Meal) => item.id}
          renderSectionHeader={({ section }: SectionListData<Meal>) => (
            <MealsListTitle size="LG">{section.date}</MealsListTitle>
          )}
          renderItem={({
            item,
          }: SectionListRenderItemInfo<MealDateGroupItem>) => (
            <CardMeal meal={item} onPress={() => handleShowMeal(item.id)} />
          )}
          ListEmptyComponent={() => (
            <Text>Não há refeições cadastradas ainda.</Text>
          )}
        />
      </Page.Content>
    </Page.Container>
  )
}
