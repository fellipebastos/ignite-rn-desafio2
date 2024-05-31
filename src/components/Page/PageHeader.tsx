import { ViewProps } from 'react-native'

import {
  PageHeaderBackButton,
  PageHeaderBackIcon,
  PageHeaderStyle,
  PageHeaderTitle,
} from './styles'
import { useNavigation } from '@react-navigation/native'

type PageHeaderProps = ViewProps & {
  title: string
}

export function PageHeader({ title, ...props }: PageHeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <PageHeaderStyle {...props}>
      <PageHeaderBackButton onPress={handleGoBack}>
        <PageHeaderBackIcon />
      </PageHeaderBackButton>
      <PageHeaderTitle>{title}</PageHeaderTitle>
    </PageHeaderStyle>
  )
}
