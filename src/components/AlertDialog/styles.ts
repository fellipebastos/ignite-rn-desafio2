import styled from 'styled-components/native'

import { Title } from '@components/Title'
import { Button } from '@components/Button'

export const AlertDialogContainer = styled.Modal``

export const AlertDialogTrigger = styled.TouchableOpacity``

export const AlertDialogOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'rgba(0, 0, 0, 0.25)';
  padding: ${({ theme }) => `0 ${theme.SPACES[6]}`};
`

export const AlertDialogContent = styled.View`
  width: 100%;
  gap: 32px;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 40px 28px 24px;
  align-items: center;
`

export const AlertDialogTitle = styled(Title).attrs({
  size: 'LG',
})`
  text-align: center;
`

export const AlertDialogActions = styled.View`
  flex-direction: row;
  gap: 16px;
`

export const AlertDialogAction = styled(Button)`
  flex: 1;
`
