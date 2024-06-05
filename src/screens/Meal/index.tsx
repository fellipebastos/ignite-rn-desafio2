import { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { getTodayDate, getTodayHour } from '@utils/date'

import { createMeal } from '@storage/meal'

import { Button } from '@components/Button'
import { Form } from '@components/Form'
import { Page } from '@components/Page'

import { FormMeal, FormMealDate } from './styles'

type Inputs = {
  name: string
  description: string
  date: string
  hour: string
  inDiet: boolean | null
}

export function Meal() {
  const route = useRoute<RouteProp<MealRouteParams, 'meal'>>()
  const { id } = route.params || {}

  const navigation = useNavigation()

  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    description: '',
    date: getTodayDate(),
    hour: getTodayHour(),
    inDiet: null,
  })

  function handleInputChange(name: string, value: string | boolean) {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit() {
    if (inputs.inDiet === null) return

    await createMeal({
      id: Date.now().toString(),
      name: inputs.name,
      description: inputs.description,
      date: inputs.date,
      hour: inputs.hour,
      inDiet: inputs.inDiet,
    })

    setInputs({
      name: '',
      description: '',
      date: getTodayDate(),
      hour: getTodayHour(),
      inDiet: null,
    })

    navigation.navigate('feedback', { inDiet: inputs.inDiet })
  }

  useEffect(() => {
    if (id) {
      // fetch meal by id
    }
  }, [id])

  const options = [
    { type: true, label: 'Sim', active: inputs.inDiet === true },
    { type: false, label: 'Nãot', active: inputs.inDiet === false },
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
              value={inputs.hour}
              onChangeText={(value) => handleInputChange('hour', value)}
            />
          </FormMealDate>

          <Form.Boolean
            label="Está dentro da dieta?"
            options={options}
            onChange={(value) => handleInputChange('inDiet', value)}
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
