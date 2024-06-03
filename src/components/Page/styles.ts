import { Title } from '@components/Title'
import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { DefaultTheme, css } from 'styled-components/native'

export type PageContainerColor = 'default' | 'red' | 'green' | 'gray'

export type PageContainerVariants = {
  color: PageContainerColor
}

const pageContainerVariants = {
  color: {
    default: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.GRAY_100};
    `,
    red: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.RED_100};
    `,
    green: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.GREEN_100};
    `,
    gray: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.GRAY_300};
    `,
  },
}

export const PageContainerStyle = styled.View<PageContainerVariants>`
  flex: 1;
  ${({ theme, color }) => pageContainerVariants.color[color](theme)}
`

export const PageHeaderStyle = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.SPACES[6]};
    margin-bottom: -45px;
  `}

  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const PageHeaderBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 73px;
  z-index: 1;
`

export const PageHeaderBackIcon = styled(ArrowLeft)`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const PageHeaderTitle = styled(Title).attrs({ size: 'LG' })`
  flex: 1;
  text-align: center;
  padding: 75px 0;
`

export const PageContentStyle = styled(SafeAreaView).attrs({
  edges: [],
})`
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.SPACES[10]} ${theme.SPACES[6]};
    border-top-left-radius: ${theme.RADII.LG};
    border-top-right-radius: ${theme.RADII.LG};
    background-color: ${theme.COLORS.GRAY_100};
  `}
`
