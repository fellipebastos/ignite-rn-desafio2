import { ViewProps } from 'react-native'
import { CardContainer, CardVariant } from './styles'

type CardRootProps = ViewProps & {
  variant?: CardVariant
}

export function CardRoot({ variant = 'default', children }: CardRootProps) {
  return <CardContainer variant={variant}>{children}</CardContainer>
}
