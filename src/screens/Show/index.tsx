import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

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
import { Alert } from 'react-native'

export function Show() {
  const route = useRoute<RouteProp<ShowRouteParams, 'show'>>()
  const { id } = route.params

  const navigation = useNavigation()

  function handleEditMeal() {
    navigation.navigate('meal', { id })
  }

  function handleDeleteMeal() {
    Alert.alert('Refeição excluída com sucesso!', '', [
      { onPress: () => navigation.navigate('home') },
    ])
  }

  return (
    <Page.Container color="green">
      <Page.Header title="Refeição" />

      <Page.Content>
        <Info>
          <Title size="LG">Sanduíche</Title>
          <Text>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
        </Info>

        <Info>
          <Title size="SM">Data e hora</Title>
          <Text>12/08/2022 às 16:00</Text>
        </Info>

        <DietStatus>
          <DietStatusCircle inDiet />
          <DietStatusText>dentro da dieta</DietStatusText>
          {/* <DietStatusText>fora da dieta</DietStatusText> */}
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
