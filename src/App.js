import './App.css'
import { useState } from 'react'

export const replaceCamelWithSpaces = (colorName) =>
  colorName.replace(/\B([A-Z])\B/g, ' $1')

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  const [buttonDisabled, setButtonDisabled] = useState(false)

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
        style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        onChange={() => setButtonDisabled(!buttonDisabled)}
      />
      <label htmlFor='disable-button-checkbox'>Disabled button</label>
    </div>
  )
}

export default App
