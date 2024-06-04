import { Text } from '@components/Text'
import styled, { css } from 'styled-components/native'

export const CardMealContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border-radius: 6px;
    border: 1px solid ${theme.COLORS.GRAY_300};
    padding: ${theme.SPACES[4]};
    margin-bottom: ${theme.SPACES[3]};
  `}

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CardMealTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS};
  `}
`

export const CardMealDivider = styled.View`
  width: 1px;
  height: 14px;
  margin: 0 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const CardMealTitle = styled(Text)`
  flex: 1;
`

export const CardMealStatus = styled.View<{ status: boolean }>`
  ${({ theme, status }) => css`
    background-color: ${status ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};
    border-radius: ${theme.RADII.FULL};
  `}

  height: 14px;
  width: 14px;
`
