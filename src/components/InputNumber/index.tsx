import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  max?: number
  value: number
  changeValue: (changedValue: number) => void
}

export function InputNumber({
  max = 999,
  changeValue,
  value,
}: InputNumberProps) {
  function handleIncreaseValue() {
    if (value < max) {
      changeValue(value + 1)
    }
  }
  function handleDecreaseValue() {
    if (value > 1) {
      changeValue(value - 1)
    }
  }

  return (
    <InputNumberContainer>
      <button onClick={handleDecreaseValue}>
        <Minus weight="bold" />
      </button>

      <span>{value}</span>

      <button onClick={handleIncreaseValue}>
        <Plus weight="bold" />
      </button>
    </InputNumberContainer>
  )
}
