import { Text } from '@components/Text'
import {
  FormBooleanOption,
  FormBooleanContainer,
  FormInputLabel,
  FormBooleanOptionBadge,
} from './styles'

type Option = {
  type: boolean
  label: string
  active: boolean
}

type FormBooleanProps = {
  label: string
  options: Option[]
  onChange: (type: boolean) => void
}

export function FormBoolean({
  label,
  options = [],
  onChange,
}: FormBooleanProps) {
  return (
    <>
      <FormInputLabel>{label}</FormInputLabel>

      <FormBooleanContainer>
        {options.map((option) => (
          <FormBooleanOption
            key={option.label}
            type={option.type}
            active={option.active}
            onPress={() => onChange(option.type)}
            activeOpacity={1}
          >
            <FormBooleanOptionBadge type={option.type} />
            <Text size="SM">{option.label}</Text>
          </FormBooleanOption>
        ))}
      </FormBooleanContainer>
    </>
  )
}
