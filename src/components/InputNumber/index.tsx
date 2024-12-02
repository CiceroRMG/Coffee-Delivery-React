import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  max?: number
}

export function InputNumber({ max = 999 }: InputNumberProps) {
  const [value, setValue] = useState(1)

  function handleIncreaseValue() {
    if (value < max) {
      setValue(value + 1)
    }
  }
  function handleDecreaseValue() {
    if (value > 1) {
      setValue(value - 1)
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
