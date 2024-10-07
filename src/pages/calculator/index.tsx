import { useContext, useState } from 'react'
import { CalculatorContainer, ContainerTeclas } from './styles'
import { InputResult } from '../../components/Input'

import { DarkMode } from '../../components/DarkMode'
import { ContainerNumbers } from '../../components/ContainerNumbers'
import { DarkModeContext } from '../../routes/route'

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState<string>('0')
  const [firstNumber, SetFirstNumber] = useState('0')
  const [operator, setOperator] = useState('')
  const { isActive } = useContext(DarkModeContext)

  return (
    <CalculatorContainer $isActive={isActive}>
      <DarkMode />
      <InputResult value={currentNumber} secondValue={firstNumber} />
      <ContainerTeclas $isActive={isActive}>
        <ContainerNumbers
          operator={operator}
          isActive={isActive}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          SetFirstNumber={SetFirstNumber}
          setOperator={setOperator}
          firstNumber={firstNumber}
        />
      </ContainerTeclas>
    </CalculatorContainer>
  )
}
