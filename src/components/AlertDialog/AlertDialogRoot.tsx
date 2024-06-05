import { ReactNode, createContext, useContext, useState } from 'react'

type AlertDialogContextType = [boolean, { open: () => void; close: () => void }]

type AlertDialogRootProps = {
  children: ReactNode
}

const AlertDialogContext = createContext({} as AlertDialogContextType)

export function AlertDialogRoot({ children }: AlertDialogRootProps) {
  const [opened, setOpened] = useState(false)

  return (
    <AlertDialogContext.Provider
      value={[
        opened,
        { open: () => setOpened(true), close: () => setOpened(false) },
      ]}
    >
      {children}
    </AlertDialogContext.Provider>
  )
}

export function useAlertDialog() {
  const context = useContext(AlertDialogContext)

  if (!context) {
    throw new Error('useAlertDialog must be used within an AlertDialogRoot')
  }

  return context
}
