import { useAlertDialog } from './AlertDialogRoot'

import { AlertDialogAction as AlertDialogActionStyle } from './styles'

type AlertDialogProps = {
  children: string
  onPress: () => void
}

export function AlertDialogAction({ children, onPress }: AlertDialogProps) {
  const [, { close }] = useAlertDialog()

  function handleAction() {
    if (!onPress) return

    onPress()
    close()
  }

  return <AlertDialogActionStyle title={children} onPress={handleAction} />
}
