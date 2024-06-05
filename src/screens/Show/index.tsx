import { useCallback, useState } from 'react'
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import { deleteMeal, getMealById } from '@storage/meal'

import { Page } from '@components/Page'
import { Text } from '@components/Text'
import { Title } from '@components/Title'
import { Button } from '@components/Button'
import { AlertDialog } from '@components/AlertDialog'

import {
  Actions,
  DietStatus,
  DietStatusCircle,
  DietStatusText,
  Info,
} from './styles'

export function Show() {
  const route = useRoute<RouteProp<ShowRouteParams, 'show'>>()
  const { id } = route.params

  const navigation = useNavigation()

  const [meal, setMeal] = useState<Meal>()

  function handleEditMeal() {
    navigation.navigate('meal', { id })
  }

  async function handleDeleteMeal() {
    await deleteMeal(id)
    navigation.navigate('home')
  }

  async function fetchMeal() {
    const storedMeal = await getMealById(id)

    setMeal(storedMeal)
  }

  useFocusEffect(
    useCallback(() => {
      if (id) {
        fetchMeal()
      }
    }, []),
  )

  if (!meal) {
    return null
  }

  const { name, description, date, hour, inDiet } = meal

  return (
    <Page.Container color={inDiet ? 'green' : 'red'}>
      <Page.Header title="Refeição" />

      <Page.Content>
        <Info>
          <Title size="LG">{name}</Title>
          <Text>{description}</Text>
        </Info>

        <Info>
          <Title size="SM">Data e hora</Title>
          <Text>
            {date} às {hour}
          </Text>
        </Info>

        <DietStatus>
          <DietStatusCircle inDiet={inDiet} />
          <DietStatusText>
            {inDiet ? 'dentro da dieta' : 'fora da dieta'}
          </DietStatusText>
        </DietStatus>

        <Actions>
          <Button
            title="Editar refeição"
            icon={PencilSimpleLine}
            onPress={handleEditMeal}
          />

          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button title="Excluir refeição" variant="outline" icon={Trash} />
            </AlertDialog.Trigger>

            <AlertDialog.Content>
              <AlertDialog.Title>
                Deseja realmente excluir o registro da refeição?
              </AlertDialog.Title>

              <AlertDialog.Actions>
                <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
                <AlertDialog.Action onPress={handleDeleteMeal}>
                  Sim, exluir
                </AlertDialog.Action>
              </AlertDialog.Actions>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Actions>
      </Page.Content>
    </Page.Container>
  )
}
