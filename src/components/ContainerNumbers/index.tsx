import { useTheme } from 'styled-components'
import {
  handleAddNumber,
  handleBackSpace,
  handleDivNumber,
  handleMultNumber,
  handleOnClear,
  handlePercentNumber,
  handleRemNumber,
  handleSumNumber,
} from '../../components/calcFunctions'
import { IconComponent } from '../Tecla'
import { ContainerNumber, EqualCircle } from './styles'
import * as icons from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface ContainerNumbersProps {
  isActive: boolean
  currentNumber: string
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>
  SetFirstNumber: React.Dispatch<React.SetStateAction<string>>
  setOperator: React.Dispatch<React.SetStateAction<string>>
  firstNumber: string
  operator: string
}

export function ContainerNumbers({
  isActive,
  currentNumber,
  setCurrentNumber,
  SetFirstNumber,
  setOperator,
  firstNumber,
  operator,
}: ContainerNumbersProps) {
  const { ...colors } = useTheme()
  function handleEquals(
    firstNumber: string,
    currentNumber: string,
    operator: string,
  ) {
    if (firstNumber !== '0' && operator !== '' && currentNumber !== '0') {
      switch (operator) {
        case '+':
          handleSumNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
          break
        case '-':
          handleRemNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
          break
        case '*':
          handleMultNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
          break
        case '/':
          handleDivNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
          break
        case '%':
          handlePercentNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
          break
        default:
          break
      }
    }
  }
  return (
    <ContainerNumber>
      <IconComponent
        Icon={icons.Trash}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() =>
          handleOnClear(setCurrentNumber, SetFirstNumber, setOperator)
        }
      />
      <IconComponent
        Icon={icons.Backspace}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() => handleBackSpace(currentNumber, setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.Percent}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() =>
          handlePercentNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
        }
      />
      <IconComponent
        Icon={icons.Divide}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() =>
          handleDivNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
        }
      />
      <IconComponent
        Icon={icons.NumberSeven}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('7', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.NumberEight}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('8', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.NumberNine}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('9', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.X}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() =>
          handleMultNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
        }
      />
      <IconComponent
        Icon={icons.NumberFour}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('4', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.NumberFive}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('5', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.NumberSix}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('6', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.Minus}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() =>
          handleRemNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
        }
      />
      <IconComponent
        Icon={icons.NumberThree}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('3', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.NumberTwo}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('2', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.NumberOne}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('1', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.Plus}
        color={isActive ? colors['orange-500'] : colors['blue-400']}
        size={35}
        onClick={() =>
          handleSumNumber(
            firstNumber,
            currentNumber,
            setCurrentNumber,
            SetFirstNumber,
            setOperator,
          )
        }
      />
      <Link to="/history">
        <IconComponent
          Icon={icons.ClockCounterClockwise}
          color={colors.white}
          size={35}
          onClick={() => handleAddNumber('', setCurrentNumber)}
        />
      </Link>
      <IconComponent
        Icon={icons.NumberZero}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('0', setCurrentNumber)}
      />
      <IconComponent
        Icon={icons.Command}
        color={colors.white}
        size={35}
        onClick={() => handleAddNumber('', setCurrentNumber)}
      />
      <EqualCircle $isActive={isActive}>
        <IconComponent
          Icon={icons.Equals}
          color={colors.white}
          size={35}
          onClick={() => handleEquals(firstNumber, currentNumber, operator)}
        />
      </EqualCircle>
    </ContainerNumber>
  )
}
