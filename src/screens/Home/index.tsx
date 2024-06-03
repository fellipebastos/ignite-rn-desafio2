import { useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'

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

const meals = [
  {
    title: '12.08.22',
    data: [
      { id: '1', title: 'X-tudo', time: '12:00', status: true },
      { id: '2', title: 'X-salada', time: '12:00', status: false },
      { id: '3', title: 'X-bacon', time: '12:00', status: true },
    ],
  },
  {
    title: '11.08.22',
    data: [
      { id: '5', title: 'Janta', time: '20:00', status: false },
      { id: '4', title: 'Almoço', time: '12:00', status: true },
      {
        id: '6',
        title: 'Café da manhã',
        time: '08:00',
        status: true,
      },
      {
        id: '7',
        title: 'Café da tarde',
        time: '16:00',
        status: true,
      },
    ],
  },
]

export function Home() {
  const navigation = useNavigation()

  function handleGoToStats() {
    navigation.navigate('stats')
  }

  function handleCreateMeal() {
    navigation.navigate('new')
  }

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
          sections={meals}
          keyExtractor={(item) => item.id + item.title}
          renderItem={({ item }) => <CardMeal meal={item} />}
          renderSectionHeader={({ section }) => (
            <MealsListTitle size="LG">{section.title}</MealsListTitle>
          )}
        />
      </Page.Content>
    </Page.Container>
  )
}
