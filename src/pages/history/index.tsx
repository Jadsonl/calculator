import { ArrowLeft, TrashSimple } from '@phosphor-icons/react'
import { ContainerHistory, Header, HistoryClear, Line } from './styles'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CurrentNumberContext, DarkModeContext } from '../../routes/route'

export function History() {
  const { isActive } = useContext(DarkModeContext)
  const { currentNumber, operator } = useContext(CurrentNumberContext)
  const [history, setHistory] = useState<string[]>(() => {
    // Carrega o histórico do Local Storage na inicialização
    const savedHistory = localStorage.getItem('history')
    return savedHistory ? JSON.parse(savedHistory) : []
  })

  useEffect(() => {
    if (currentNumber !== '' && operator !== ',') {
      setHistory((prevState) => {
        const updatedHistory = [...prevState, `${currentNumber}${operator}`]
        localStorage.setItem('history', JSON.stringify(updatedHistory)) // Atualiza no Local Storage
        return updatedHistory
      })
    }
  }, [currentNumber, operator])

  console.log(history)
  return (
    <ContainerHistory $isActive={isActive}>
      <Header $isActive={isActive}>
        <Link to="/">
          <ArrowLeft size={24} />
        </Link>
        <h1>History</h1>
        <HistoryClear
          $isActive={isActive}
          onClick={() => {
            setHistory([])
            localStorage.removeItem('history')
          }}
        >
          <TrashSimple size={24} />
        </HistoryClear>
      </Header>
      {history.length > 0 ? <p>{history[0]}</p> : null}
      <div>
        <p>{operator}</p>
        <Line />
        <p>{currentNumber}</p>
      </div>
    </ContainerHistory>
  )
}
