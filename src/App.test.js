import { render, screen } from '@testing-library/react'
import App from './App'

test('button has correct initial color', () => {
  render(<App />)
  // Find an element with a role button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('button turns blue when clicked', () => {})
