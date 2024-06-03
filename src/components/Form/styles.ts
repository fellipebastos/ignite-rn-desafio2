import styled, { css } from 'styled-components/native'

export const FormInputField = styled.View`
  flex: 1 1 auto;
  width: 100%;
`

export const FormInputLabel = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: ${theme.SPACES[2]};
  `}
`

export const FormInputContainer = styled.TextInput`
  ${({ theme, multiline }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    border-radius: ${theme.RADII.SM};
    padding: ${multiline ? theme.SPACES[4] : 0} ${theme.SPACES[4]};

    color: ${theme.COLORS.GRAY_700};
    height: ${multiline ? '120px' : '48px'};
  `}
`

export const FormBooleanContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACES[4]};
`

type FormBooleanOptionProps = {
  type: boolean
  active: boolean
}

export const FormBooleanOption = styled.TouchableOpacity<FormBooleanOptionProps>`
  border: 1px solid transparent;

  ${({ theme }) => css`
    flex: 1 1 auto;
    border-radius: ${theme.RADII.SM};
    background-color: ${theme.COLORS.GRAY_200};
  `}

  ${({ theme, type, active }) =>
    active &&
    css`
      background-color: ${type ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
      border-color: ${type ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
    `}

  height: 48px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACES[3]};
`

export const FormBooleanOptionBadge = styled.View<
  Omit<FormBooleanOptionProps, 'active'>
>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ theme, type }) => css`
    background-color: ${type ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  `}
`
