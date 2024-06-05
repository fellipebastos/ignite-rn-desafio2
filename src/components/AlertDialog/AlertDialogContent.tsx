import { ReactNode } from 'react'

import { useAlertDialog } from './AlertDialogRoot'

import {
  AlertDialogContainer,
  AlertDialogContent as AlertDialogContentStyle,
  AlertDialogOverlay,
} from './styles'

type AlertDialogContentProps = {
  children: ReactNode
}

export function AlertDialogContent({ children }: AlertDialogContentProps) {
  const [opened] = useAlertDialog()

  return (
    <AlertDialogContainer transparent animationType="fade" visible={opened}>
      <AlertDialogOverlay>
        <AlertDialogContentStyle>{children}</AlertDialogContentStyle>
      </AlertDialogOverlay>
    </AlertDialogContainer>
  )
}
