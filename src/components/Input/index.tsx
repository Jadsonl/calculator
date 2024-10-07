import { InputResul, InputResulContainer } from './styles'

interface InputProps {
  value: string
  secondValue?: string
}
export function InputResult({ value }: InputProps) {
  return (
    <InputResulContainer>
      <InputResul
        disabled
        value={value === '0' ? '0' : `= ${value}`}
        type="text"
      />
    </InputResulContainer>
  )
}
