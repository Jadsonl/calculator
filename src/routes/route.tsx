import { Route, Routes } from "react-router-dom"
import { Calculator } from "../pages/calculator"
import { History } from "../pages/history"
import { useState } from "react";
import React from "react";
interface DarkModeProps {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const DarkModeContext = React.createContext({} as DarkModeProps);
export function Router(){
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <DarkModeContext.Provider value={{isActive, setIsActive }}> 
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="history" element={<History />} />
        </Routes>
    </DarkModeContext.Provider>
  )
}