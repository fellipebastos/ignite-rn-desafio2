import styled, { DefaultTheme, css } from 'styled-components/native'

import { Title } from '@components/Title'
import { Text } from '@components/Text'

export type CardVariant = 'default' | 'positive' | 'negative'

export type CardVariants = {
  variant: CardVariant
}

const cardContainerVariants = {
  variant: {
    default: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.GRAY_200};
    `,
    positive: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.GREEN_100};
    `,
    negative: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.RED_100};
    `,
  },
}

export const CardContainer = styled.View<CardVariants>`
  ${({ theme, variant }) => css`
    background-color: ${theme.COLORS.GREEN_100};
    border-radius: ${theme.RADII.MD};

    padding: ${theme.SPACES[5]} ${theme.SPACES[4]};

    ${cardContainerVariants.variant[variant](theme)}
  `}

  position: relative;
  align-items: center;
`

export enum CardTitleSize {
  MD = 'XL',
  LG = 'XXL',
}

export type CardTitleStyleProps = {
  size: keyof typeof CardTitleSize
}

export const CardTitleStyle = styled(Title)<CardTitleStyleProps>`
  ${({ theme, size }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE[CardTitleSize[size]]};
  `}
`

export const CardDescription = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`
