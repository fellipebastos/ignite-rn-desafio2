import styled, { css } from 'styled-components/native'
import theme from 'theme'

export type TitleStyleProps = {
  size: keyof typeof theme.FONT_SIZE
}

export const TitleStyle = styled.Text<TitleStyleProps>`
  ${({ theme, size }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE[size]};
  `}
`
