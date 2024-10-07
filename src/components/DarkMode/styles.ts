import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled from "styled-components";

export const DarkModeContainer = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 14px;
  padding: 0 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${(props) => props.theme.white};
  margin: 72px 0 0 34px;
  background-color: ${(props) => props.theme["green-500"]};

`
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  $active?: boolean;
}


export const ButtonGlobal = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  padding: 6px;
  border-radius: 14px;
`;

export const LightModeButton = styled(ButtonGlobal)`
  background-color: ${(props) => (props.$active ? props.theme.white : "transparent")};
  color: ${(props) => (props.$active ? props.theme["green-500"] : props.theme.white)};
`;

export const DarkModeButton = styled(ButtonGlobal)`
  background-color: ${(props) => (props.$active ? props.theme.white : "transparent")};
  color: ${(props) => (props.$active ? props.theme["green-500"] : props.theme.white)};
`;
