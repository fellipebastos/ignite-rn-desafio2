import { TouchableOpacityProps } from 'react-native'

import {
  CardMealContainer,
  CardMealDivider,
  CardMealStatus,
  CardMealTime,
  CardMealTitle,
} from './styles'

type CardMealProps = TouchableOpacityProps & {
  meal: {
    name: string
    hour: string
    inDiet: boolean
  }
}

export function CardMeal({
  meal: { hour, name, inDiet },
  ...props
}: CardMealProps) {
  return (
    <CardMealContainer {...props}>
      <CardMealTime>{hour}</CardMealTime>
      <CardMealDivider />
      <CardMealTitle>{name}</CardMealTitle>
      <CardMealStatus status={inDiet} />
    </CardMealContainer>
  )
}
