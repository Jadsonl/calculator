import { ArrowLeft, TrashSimple } from "@phosphor-icons/react";
import { ContainerHistory, Header, HistoryClear } from "./styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../routes/route";

export function History() { 
  const { isActive } = useContext(DarkModeContext);
console.log(isActive)
  return (
    <ContainerHistory $isActive={isActive}>
      <Header $isActive={isActive}>
        <Link to='/'>
          <ArrowLeft size={24}/>
        </Link>
        <h1>History</h1> 
        <HistoryClear $isActive={isActive}>
          <TrashSimple size={24}/>
        </HistoryClear>
      </Header>
      
    </ContainerHistory>
  )
}


