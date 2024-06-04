import { Text } from '@components/Text'
import { Title } from '@components/Title'
import styled, { css } from 'styled-components/native'

export const FeedbackMealContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

type FeedbackMealTitleProps = {
  inDiet: boolean
}

export const FeedbackMealTitle = styled(Title)<FeedbackMealTitleProps>`
  ${({ theme, inDiet }) => css`
    color: ${inDiet ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
    margin-bottom: ${theme.SPACES[3]};
  `}
`

export const FeedbackMealMessage = styled(Text)`
  text-align: center;
`

export const TextBold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const CreateMealImage = styled.Image`
  ${({ theme }) => css`
    margin-top: ${theme.SPACES[10]};
    margin-bottom: ${theme.SPACES[8]};
  `}
`
