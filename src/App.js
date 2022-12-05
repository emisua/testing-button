import './App.css'
import { useState } from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [buttonDisabled, setButtonDisabled] = useState(false)

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {buttonColor === 'red' ? 'blue' : 'red'}
      </button>
      <input
        type='checkbox'
        onChange={() => setButtonDisabled(!buttonDisabled)}
      />
    </div>
  )
}

export default App
