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
    time: string
    title: string
    status: boolean
  }
}

export function CardMeal({
  meal: { time, title, status },
  ...props
}: CardMealProps) {
  return (
    <CardMealContainer {...props}>
      <CardMealTime>{time}</CardMealTime>
      <CardMealDivider />
      <CardMealTitle>{title}</CardMealTitle>
      <CardMealStatus status={status} />
    </CardMealContainer>
  )
}
