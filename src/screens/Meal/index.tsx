import { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { getTodayDate, getTodayTime } from '@utils/date'

import { Button } from '@components/Button'
import { Form } from '@components/Form'
import { Page } from '@components/Page'

import { FormMeal, FormMealDate } from './styles'

type Inputs = {
  name: string
  description: string
  date: string
  time: string
  isDiet: boolean | null
}

export function Meal() {
  const route = useRoute<RouteProp<MealRouteParams, 'meal'>>()
  const { id } = route.params || {}

  const navigation = useNavigation()

  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    description: '',
    date: getTodayDate(),
    time: getTodayTime(),
    isDiet: null,
  })

  function handleInputChange(name: string, value: string | boolean) {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    if (inputs.isDiet === null) return

    setInputs({
      name: '',
      description: '',
      date: getTodayDate(),
      time: getTodayTime(),
      isDiet: null,
    })

    navigation.navigate('feedback', { inDiet: inputs.isDiet })
  }

  useEffect(() => {
    if (id) {
      // fetch meal by id
    }
  }, [id])

  const options = [
    { type: true, label: 'Sim', active: inputs.isDiet === true },
    { type: false, label: 'Nãot', active: inputs.isDiet === false },
  ]

  return (
    <Page.Container color="gray">
      <Page.Header title={`${id ? 'Editar' : 'Nova'} refeição`} />

      <Page.Content>
        <FormMeal>
          <Form.Input
            label="Nome"
            value={inputs.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />

          <Form.Input
            multiline
            label="Descrição"
            value={inputs.description}
            onChangeText={(value) => handleInputChange('description', value)}
          />

          <FormMealDate>
            <Form.Input
              label="Data"
              value={inputs.date}
              onChangeText={(value) => handleInputChange('date', value)}
            />

            <Form.Input
              label="Hora"
              value={inputs.time}
              onChangeText={(value) => handleInputChange('time', value)}
            />
          </FormMealDate>

          <Form.Boolean
            label="Está dentro da dieta?"
            options={options}
            onChange={(value) => handleInputChange('isDiet', value)}
          />
        </FormMeal>

        <Button
          title={id ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={handleSubmit}
        />
      </Page.Content>
    </Page.Container>
  )
}
