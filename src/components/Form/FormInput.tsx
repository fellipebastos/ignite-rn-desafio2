import { TextInputProps } from 'react-native'

import { FormInputContainer, FormInputField, FormInputLabel } from './styles'

type FormInputProps = TextInputProps & {
  label: string
}

export function FormInput({ label, ...props }: FormInputProps) {
  return (
    <FormInputField>
      <FormInputLabel>{label}</FormInputLabel>
      <FormInputContainer {...props} />
    </FormInputField>
  )
}
