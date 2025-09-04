import { useState } from 'react'

import './App.css'
import Input from './components/input/input.jsx'

function App() {
  const [result, setResult] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  function handleSubmit(codigo) {
    if (codigo === "1234") {
      setResult("¡Código correcto!");
      setIsCorrect(true)
    } else {
      setResult("Código incorrecto.");
      setIsCorrect(false)
    }
  }

  return (
    <div id="hero" className={isCorrect ? "fondo-correcto" : ""}>
      <div id="overlay"></div>
      <div id="content">
        <h1 id="title">¡Ingresa para ganar!</h1>
        <Input id="formRow" onSubmit={handleSubmit} />
        {result && <p id="resultMsg">{result}</p>}
      </div>
    </div>
  )
}

export default App
