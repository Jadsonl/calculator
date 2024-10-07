import { DarkModeContext } from "../../routes/route";
import { DarkModeContainer, DarkModeButton, LightModeButton } from "./styles";

import { useContext } from "react";

export function DarkMode() {
  const { isActive, setIsActive } = useContext(DarkModeContext);

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <DarkModeContainer>
      <LightModeButton $active={isActive ? undefined : true}  onClick={handleClick}>Light</LightModeButton>
      <DarkModeButton $active={isActive ? true : undefined} onClick={handleClick}>Dark</DarkModeButton>
    </DarkModeContainer>
)
}


