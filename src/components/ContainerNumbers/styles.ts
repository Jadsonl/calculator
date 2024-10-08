import styled from 'styled-components'
import { CalculatorContainerProps } from '../../pages/calculator/styles'

export const ContainerNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.4375rem 4.0625rem;
  padding: 1.3125rem;
`

export const EqualCircle = styled.div<CalculatorContainerProps>`
  border-radius: 50%;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme['orange-500'] : theme['blue-400']};
  &:hover {
    filter: brightness(1.2);
  }
`

export const DarkMode1 = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
`
