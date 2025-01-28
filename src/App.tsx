import './App.css'
import CounterComponent from './presentation/components/CounterComponent'
import { ServiceProvider } from './presentation/contexts/ServiceContext'

function App() {

  return (
    <ServiceProvider>
      <CounterComponent />
    </ServiceProvider>
  )
}

export default App
