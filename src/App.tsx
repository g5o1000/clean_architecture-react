import './App.css'
import CounterComponent from './presentation/components/CounterComponent'
import { CounterProvider } from './presentation/contexts/CounterContext'

function App() {

  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  )
}

export default App
