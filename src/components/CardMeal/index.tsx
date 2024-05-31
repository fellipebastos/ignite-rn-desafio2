import {
  CardMealContainer,
  CardMealDivider,
  CardMealStatus,
  CardMealTime,
  CardMealTitle,
} from './styles'

type CardMealProps = {
  meal: {
    time: string
    title: string
    status: boolean
  }
}

export function CardMeal({ meal: { time, title, status } }: CardMealProps) {
  return (
    <CardMealContainer>
      <CardMealTime>{time}</CardMealTime>
      <CardMealDivider />
      <CardMealTitle>{title}</CardMealTitle>
      <CardMealStatus status={status} />
    </CardMealContainer>
  )
}
