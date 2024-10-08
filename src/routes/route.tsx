import { Route, Routes } from 'react-router-dom'
import { Calculator } from '../pages/calculator'
import { History } from '../pages/history'
import React, { useState } from 'react'

interface DarkModeProps {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

interface CurrentNumberProps {
  currentNumber: string
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>
  firstNumber: string
  SetFirstNumber: React.Dispatch<React.SetStateAction<string>>
  operator: string
  setOperator: React.Dispatch<React.SetStateAction<string>>
}
export const CurrentNumberContext = React.createContext(
  {} as CurrentNumberProps,
)
export const DarkModeContext = React.createContext({} as DarkModeProps)
export function Router() {
  const [currentNumber, setCurrentNumber] = useState<string>('0')
  const [firstNumber, SetFirstNumber] = useState('0')
  const [operator, setOperator] = useState('')
  const [isActive, setIsActive] = useState<boolean>(true)
  return (
    <CurrentNumberContext.Provider
      value={{
        currentNumber,
        setCurrentNumber,
        firstNumber,
        SetFirstNumber,
        operator,
        setOperator,
      }}
    >
      <DarkModeContext.Provider value={{ isActive, setIsActive }}>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="history" element={<History />} />
        </Routes>
      </DarkModeContext.Provider>
    </CurrentNumberContext.Provider>
  )
}
