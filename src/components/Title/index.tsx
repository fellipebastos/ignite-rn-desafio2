import { TextProps } from 'react-native'
import { TitleStyle, TitleStyleProps } from './styles'

type TitleProps = TextProps & {
  size?: TitleStyleProps['size']
}

export function Title({ size = 'MD', ...props }: TitleProps) {
  return <TitleStyle size={size} {...props} />
}
