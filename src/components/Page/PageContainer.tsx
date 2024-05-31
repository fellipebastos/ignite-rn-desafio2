import { ViewProps } from 'react-native'

import { PageContainerColor, PageContainerStyle } from './styles'

type PageContainerProps = ViewProps & {
  color?: PageContainerColor
}

export function PageContainer({
  color = 'default',
  ...props
}: PageContainerProps) {
  return <PageContainerStyle color={color} {...props} />
}
