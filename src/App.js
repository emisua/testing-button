import './App.css'
import { useState } from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState('red')

  const handleChangeButtonBackgroundColor = () => {
    buttonColor === 'red' ? setButtonColor('blue') : setButtonColor('red')
  }

  return (
    <div>
      <button
        onClick={handleChangeButtonBackgroundColor}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {buttonColor === 'red' ? 'blue' : 'red'}
      </button>
    </div>
  )
}

export default App
