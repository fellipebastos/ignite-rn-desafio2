import styled, { css } from 'styled-components/native'

export const PageContainerStyle = styled.View`
  ${({ theme }) => css`
    padding: ${theme.SPACES[6]};
    border-top-left-radius: ${theme.RADII.LG};
    border-top-right-radius: ${theme.RADII.LG};
  `}
`
