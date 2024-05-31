import styled, { css } from 'styled-components/native'
import theme from 'theme'

export type TextStyleProps = {
  size: keyof typeof theme.FONT_SIZE
}

export const TextStyle = styled.Text<TextStyleProps>`
  ${({ theme, size }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE[size]};
  `}
`
