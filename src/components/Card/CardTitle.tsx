import { TextProps } from 'react-native'
import { CardTitleSize, CardTitleStyle } from './styles'

type CardTitleProps = TextProps & {
  size?: keyof typeof CardTitleSize
}

export function CardTitle({ size = 'MD', ...props }: CardTitleProps) {
  return <CardTitleStyle size={size} {...props} />
}
