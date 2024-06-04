import { TouchableHighlight, View } from 'react-native'
import { IconProps } from 'phosphor-react-native'
import styled, { DefaultTheme, css } from 'styled-components/native'

export type ButtonVariant = 'normal' | 'outline'

export type ButtonVariants = {
  variant: ButtonVariant
}

const buttonVariants = {
  variant: {
    normal: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.GRAY_600};
    `,
    outline: (theme: DefaultTheme) => css`
      background-color: ${theme.COLORS.WHITE};
      border: 1px solid ${theme.COLORS.GRAY_700};
    `,
  },
}

const buttonAttrVariants = {
  variant: {
    normal: (theme: DefaultTheme) => ({
      underlayColor: theme.COLORS.GRAY_700,
    }),
    outline: (theme: DefaultTheme) => ({
      underlayColor: theme.COLORS.GRAY_300,
    }),
  },
}

export const ButtonStyle = styled(TouchableHighlight).attrs<ButtonVariants>(
  ({ theme, variant }) => ({
    activeOpacity: 1,
    ...buttonAttrVariants.variant[variant](theme),
  }),
)`
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${({ theme, variant }) => css`
    border-radius: ${theme.RADII.SM};
    padding: 0 ${theme.SPACES[6]};

    ${buttonVariants.variant[variant](theme)}
  `}
`

const buttonTextVariants = {
  variant: {
    normal: (theme: DefaultTheme) => css`
      color: ${theme.COLORS.WHITE};
    `,
    outline: (theme: DefaultTheme) => css`
      color: ${theme.COLORS.GRAY_600};
    `,
  },
}

export const ButtonIcon = styled(View).attrs<IconProps & ButtonVariants>({
  size: 18,
})`
  ${({ theme, variant }) => css`
    ${buttonTextVariants.variant[variant](theme)}
  `}
`

export const ButtonTitle = styled.Text<ButtonVariants>`
  ${({ theme, variant }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};

    ${buttonTextVariants.variant[variant](theme)}
  `}
`
