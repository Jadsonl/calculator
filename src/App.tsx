import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
