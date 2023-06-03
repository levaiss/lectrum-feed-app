// Core
import { render, screen } from '@testing-library/react'

// Components
import { Login } from '../index'

// Helpers
import { Wrapper } from '../../../../tests/helpers'

const initLoginComponent = () => {
  const { container, rerender } = render(<Wrapper><Login /></Wrapper>)

  return {
    container,
    rerender
  }
}

describe('Login form component', () => {
  test('input email should exist', () => {
    initLoginComponent()
    expect(screen.getByPlaceholderText('Пошта')).toBeInTheDocument()
  })
  test('input password should exist', () => {
    initLoginComponent()
    expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument()
  })
})
