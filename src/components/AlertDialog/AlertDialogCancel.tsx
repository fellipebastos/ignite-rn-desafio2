import { useAlertDialog } from './AlertDialogRoot'

import { AlertDialogAction as AlertDialogActionStyle } from './styles'

type AlertDialogProps = {
  children: string
}

export function AlertDialogCancel({ children }: AlertDialogProps) {
  const [, { close }] = useAlertDialog()

  return (
    <AlertDialogActionStyle
      title={children}
      variant="outline"
      onPress={close}
    />
  )
}
