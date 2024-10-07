import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled from 'styled-components'
export interface CalculatorContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $isActive: boolean
}
export const CalculatorContainer = styled.div<CalculatorContainerProps>`
  width: 390px;
  height: 797px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme, $isActive }) =>
    $isActive !== true ? theme.white : theme['gray-900']};
  color: ${({ theme, $isActive }) =>
    $isActive !== true ? theme['gray-600'] : theme.white};
  border-radius: 20px;
  overflow: hidden;
`

export const ContainerTeclas = styled.div<CalculatorContainerProps>`
  position: relative;
  height: 100vw;
  top: 10%;
  border-radius: 20px;
  background-color: ${({ theme, $isActive }) =>
    $isActive !== true ? theme['gray-600'] : theme['gray-800']};
`
