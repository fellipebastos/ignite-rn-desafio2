import { Text } from '@components/Text'
import styled, { css } from 'styled-components/native'

export const Info = styled.View`
  ${({ theme }) => css`
    gap: ${theme.SPACES[3]};
    margin-bottom: ${theme.SPACES[6]};
  `}
`

export const DietStatus = styled.View`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.SPACES[3]};
    padding: ${theme.SPACES[3]} ${theme.SPACES[4]};
    border-radius: ${theme.RADII.FULL};

    background-color: ${theme.COLORS.GRAY_200};
  `}
`

export const DietStatusText = styled(Text).attrs({
  size: 'SM',
})`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
  `}
`

type DietStatusCircleProps = {
  inDiet: boolean
}

export const DietStatusCircle = styled.View<DietStatusCircleProps>`
  ${({ theme, inDiet }) => css`
    width: ${theme.SPACES[3]};
    height: ${theme.SPACES[3]};
    border-radius: ${theme.RADII.FULL};
    background-color: ${inDiet ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  `}
`

export const Actions = styled.View`
  flex: 1;
  justify-content: flex-end;

  margin-top: 'auto';
  gap: ${({ theme }) => theme.SPACES[3]};
`
