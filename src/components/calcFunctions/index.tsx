
  export function handleOnClear( 
  setCurrentNumber: (value: string) => void,
  SetFirstNumber: (value: string) => void,
  setOperator: (value: string) => void) {
    setCurrentNumber('0')
    SetFirstNumber('0')
    setOperator('')
  }

  export function handleAddNumber(
    number: string,
    setCurrentNumber: React.Dispatch<React.SetStateAction<string>>
  ) {
    setCurrentNumber(prev => (prev === '0' ? number : prev + number));
  }

  export function handleSumNumber(  
    firstNumber: string,
    currentNumber: string,
    setCurrentNumber: (value: string) => void,
    SetFirstNumber: (value: string) => void,
    setOperator: (value: string) => void) {
    if(firstNumber == '0') {
      SetFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperator('+')
    } else {

      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperator('')
    }
  }
  export function handleRemNumber(  
    firstNumber: string,
    currentNumber: string,
    setCurrentNumber: (value: string) => void,
    SetFirstNumber: (value: string) => void,
    setOperator: (value: string) => void) {
    if(firstNumber == '0') {
  
      SetFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperator('-')
    } else {

      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperator('')
    }
  }
  export function handleMultNumber(
    firstNumber: string,
    currentNumber: string,
    setCurrentNumber: (value: string) => void,
    SetFirstNumber: (value: string) => void,
    setOperator: (value: string) => void
  ) {
    if(firstNumber == '0') {

      SetFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperator('*')
    } else {

      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperator('')
    }
  }
  export function handleDivNumber(
    firstNumber: string,
    currentNumber: string,
    setCurrentNumber: (value: string) => void,
    SetFirstNumber: (value: string) => void,
    setOperator: (value: string) => void
  ) {
    if(firstNumber == '0') {
    
      SetFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperator('/')
    } else {
      
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperator('')
    }
  }

  export function handlePercentNumber(
    firstNumber: string,
    currentNumber: string,
    setCurrentNumber: (value: string) => void,
    SetFirstNumber: (value: string) => void,
    setOperator: (value: string) => void
  ) {
    if(firstNumber == '0') {
  
      SetFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperator('%')
    } else {
      const sum = Number(firstNumber) / 100 * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperator('')
    }
  }

  export function handleBackSpace(  
    currentNumber: string,
    setCurrentNumber: (value: string) => void,
  ) 
    {
      console.log(currentNumber, typeof(currentNumber))
    if(currentNumber) {
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1))
    }
  }
  
