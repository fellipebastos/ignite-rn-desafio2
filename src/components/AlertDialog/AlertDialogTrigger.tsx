import React, { ReactElement } from 'react'

import { useAlertDialog } from './AlertDialogRoot'

type AlertDialogTriggerProps = {
  children: ReactElement
}

export function AlertDialogTrigger({ children }: AlertDialogTriggerProps) {
  const [, { open }] = useAlertDialog()

  return React.cloneElement(children, {
    ...children.props,
    onPress: open,
  })
}
