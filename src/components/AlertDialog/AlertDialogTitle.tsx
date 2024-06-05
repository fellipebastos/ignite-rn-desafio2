import { AlertDialogTitle as AlertDialogTitleStyle } from './styles'

type AlertDialogTitleProps = {
  children: string
}

export function AlertDialogTitle(props: AlertDialogTitleProps) {
  return <AlertDialogTitleStyle {...props} />
}
