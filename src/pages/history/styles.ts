import styled from "styled-components";
import { CalculatorContainerProps } from "../calculator/styles";


export const ContainerHistory = styled.div<CalculatorContainerProps>`
  width: 390px;
  height: 797px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({theme, $isActive}) => $isActive !== true ? theme.white : theme['gray-900']};
  color: ${({theme, $isActive}) => $isActive !== true ? theme['gray-600'] : theme.white};
  border-radius: 20px;
  overflow: hidden;
`


export const Header = styled.div<CalculatorContainerProps>` 
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 28px 24px 0;
  a {
    svg{
      color: ${({theme, $isActive}) => $isActive !== false ? theme.white : theme['gray-900']};
    }
  }

  a:hover {
    color: ${({theme}) => theme['orange-500']};
  }
` 

export const HistoryClear = styled.div<CalculatorContainerProps>`
  cursor: pointer;
  border-radius: 14px;
  color: ${({theme, $isActive}) => $isActive !== true ?  theme["gray-900"] : theme.white};
  &:hover {
    filter: brightness(1.2);
  } 

`