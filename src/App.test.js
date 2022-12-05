import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('button has correct initial color and updates when clicked', () => {
  render(<App />)

  // Find an element with a role button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // Click button
  fireEvent.click(colorButton)

  // Expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // Expect the button text to be Change to red
  expect(colorButton).toHaveTextContent(/change to red/i)
})

/* test('button turns blue when clicked', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', { name: 'Change to red' })
})
 */
