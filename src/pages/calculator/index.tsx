import { useContext } from 'react'
import { CalculatorContainer, ContainerTeclas } from './styles'
import { InputResult } from '../../components/Input'
import { DarkMode } from '../../components/DarkMode'
import { ContainerNumbers } from '../../components/ContainerNumbers'
import { CurrentNumberContext, DarkModeContext } from '../../routes/route'

export function Calculator() {
  const { isActive } = useContext(DarkModeContext)
  const {
    currentNumber,
    setCurrentNumber,
    firstNumber,
    SetFirstNumber,
    operator,
    setOperator,
  } = useContext(CurrentNumberContext)

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
