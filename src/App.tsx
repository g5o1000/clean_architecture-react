import { useReducer } from 'react'
import './App.css'
import Cron from './Cron';

function App() {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'increment':
          return { ...state, nr: state.nr + 1 };
      case 'decrement':
          return { ...state, nr: state.nr - 1 };
      case 'reset':
        return { ...state, nr: 0 };
      case 'changeName':
        return { ...state, name: action.payload };
    }
  }

  const initialState = { nr: 0, name: "Yolanda" }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {state?.nr}</h1>
      <h2>Nombre: {state?.name}</h2>

      <button onClick={() => dispatch({ type: 'increment'})}>Subir</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Bajar</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>

      <button onClick={() => dispatch({ type: "changeName", payload: "Shava"})}>
        Cambiar nombre
      </button>
    </div>
    <Cron />
    </>
  )
}

export default App
