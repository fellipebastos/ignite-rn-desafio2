import { ReactNode } from 'react'
import { AlertDialogActions as AlertDialogActionsStyle } from './styles'

type AlertDialogActionsProps = {
  children: ReactNode
}

export function AlertDialogActions(props: AlertDialogActionsProps) {
  return <AlertDialogActionsStyle {...props} />
}
