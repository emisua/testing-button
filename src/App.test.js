import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color and updates when clicked', () => {
  render(<App />)

  // Find an element with a role button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })

  // Expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // Click button
  fireEvent.click(colorButton)

  // Expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })

  // Expect the button text to be Change to MediumVioletRed
  expect(colorButton).toHaveTextContent(/change to Medium Violet Red/i)
})

test('initial conditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { label: 'Disable button' })

  // Comprobar que el button comience activado
  expect(colorButton).toBeEnabled()

  // Comprobar que el checkbox comience desactivado
  expect(checkbox).not.toBeChecked()
})

test('checkbox disables button on first click and enables on second click, then button turns gray', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { label: 'Disable button' })

  // Check checkbox
  fireEvent.click(checkbox)

  // Comprobar que el button esté desactivado
  expect(colorButton).not.toBeEnabled()

  // Comprobar que tenga el fondo gris
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  // Uncheck checkbox
  fireEvent.click(checkbox)

  // Comprobar que el button esté activado de nuevo
  expect(colorButton).toBeEnabled()

  // Coprobar que no tenga el fondo gris
  expect(colorButton).not.toHaveStyle({ backgroundColor: 'gray' })
})

describe('Spaces before camelCase capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
