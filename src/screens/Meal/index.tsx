import { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { formatDateToBR, formatDateToEN, getTodayHour } from '@utils/date'

import { createMeal, getMealById, updateMeal } from '@storage/meal'

import { useStats } from '@providers/StatsProvider'

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
  const { refreshStats } = useStats()

  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    description: '',
    date: formatDateToBR(new Date().toLocaleDateString('pt-BR')),
    hour: getTodayHour(),
    inDiet: null,
  })

  function handleInputChange(name: string, value: string | boolean) {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit() {
    const { name, description, date, hour, inDiet } = inputs

    if (typeof inDiet !== 'boolean') return

    const storeMeal = {
      name,
      description,
      hour,
      inDiet,
      date: formatDateToEN(date),
    }

    if (id) {
      await updateMeal({ ...storeMeal, id })
      await refreshStats()

      navigation.goBack()
      return
    }

    await createMeal({
      id: Date.now().toString(),
      ...storeMeal,
    })

    await refreshStats()
    navigation.navigate('feedback', { inDiet })
  }

  async function fetchMeal(mealId: string) {
    const storedMeal = await getMealById(mealId)

    if (storedMeal) {
      const { name, description, date, hour, inDiet } = storedMeal

      setInputs({ name, description, date, hour, inDiet })
    }
  }

  useEffect(() => {
    if (id) {
      fetchMeal(id)
    }
  }, [id])

  const options = [
    { type: true, label: 'Sim', active: inputs.inDiet === true },
    { type: false, label: 'Não', active: inputs.inDiet === false },
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
