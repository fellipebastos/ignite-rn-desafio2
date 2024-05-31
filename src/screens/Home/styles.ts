import styled, { DefaultTheme, css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

import { Title } from '@components/Title'

export const CardContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACES[8]};
  margin-bottom: ${({ theme }) => theme.SPACES[10]};
`

export type HomeCardArrowIconVariant = 'positive' | 'negative'

export type HomeCardArrowIconVariants = {
  variant: HomeCardArrowIconVariant
}

const homeCardArrowIconVariants = {
  variant: {
    positive: (theme: DefaultTheme) => ({
      color: theme.COLORS.GREEN_300,
    }),
    negative: (theme: DefaultTheme) => ({
      color: theme.COLORS.RED_300,
    }),
  },
}

export const HomeCardArrowIcon = styled(
  ArrowUpRight,
).attrs<HomeCardArrowIconVariants>(({ theme, variant }) => ({
  size: 24,
  ...homeCardArrowIconVariants.variant[variant](theme),
}))`
  ${({ theme }) => css`
    top: ${theme.SPACES[3]};
    right: ${theme.SPACES[3]};
  `}

  position: absolute;
`

export const AddMealContainer = styled.View`
  gap: ${({ theme }) => theme.SPACES[3]};
`

export const MealsList = styled.SectionList`
  margin-top: ${({ theme }) => theme.SPACES[4]};
`

export const MealsListTitle = styled(Title).attrs({
  size: 'LG',
})`
  margin-top: ${({ theme }) => theme.SPACES[4]};
  margin-bottom: ${({ theme }) => theme.SPACES[3]};
`
