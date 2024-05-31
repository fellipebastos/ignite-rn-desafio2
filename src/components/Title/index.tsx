import { TextProps } from 'react-native'
import { TitleStyle, TitleStyleProps } from './styles'

type TitleProps = TextProps & TitleStyleProps

export function Title(props: TitleProps) {
  return <TitleStyle {...props} />
}
