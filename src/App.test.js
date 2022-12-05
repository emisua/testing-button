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

test('initial conditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  const checkbox = screen.getByRole('checkbox')

  // Comprobar que el button comience activado
  expect(colorButton).toBeEnabled()

  // Comprobar que el checkbox comience desactivado
  expect(checkbox).not.toBeChecked()
})

test('checkbox disables dutton on first click and enables on second click', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  const checkbox = screen.getByRole('checkbox')

  // Check checkbox
  fireEvent.click(checkbox)

  // Comprobar que el button esté desactivado
  expect(colorButton).not.toBeEnabled()

  // Uncheck checkbox
  fireEvent.click(checkbox)

  // Comprobar que el button esté activado de nuevo
  expect(colorButton).toBeEnabled()
})
