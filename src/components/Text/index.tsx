import { TextProps as TextPrimitiveProps } from 'react-native'
import { TextStyle, TextStyleProps } from './styles'

type TextProps = TextPrimitiveProps & {
  size?: TextStyleProps['size']
}

export function Text({ size = 'MD', ...props }: TextProps) {
  return <TextStyle size={size} {...props} />
}
