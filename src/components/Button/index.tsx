import { TouchableHighlightProps } from 'react-native'
import { Icon } from 'phosphor-react-native'

import { ButtonIcon, ButtonStyle, ButtonTitle, ButtonVariants } from './styles'

type ButtonProps = TouchableHighlightProps & {
  title: string
  icon?: Icon
  variant?: ButtonVariants['variant']
}

export function Button({
  title,
  icon: Icon,
  variant = 'normal',
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle variant={variant} {...props}>
      <>
        {Icon && <ButtonIcon as={Icon} variant={variant} />}
        <ButtonTitle variant={variant}>{title}</ButtonTitle>
      </>
    </ButtonStyle>
  )
}
