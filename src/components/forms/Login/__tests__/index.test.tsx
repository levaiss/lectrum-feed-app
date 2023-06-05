// Core
import nock from 'nock'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

// Components
import { Login } from '../index'

// Helpers
import { ROOT_URL } from '../../../../api/config'
import { Wrapper } from '../../../../tests/helpers'

describe('Login form component', () => {
  let emailInput: HTMLElement,
    passwordInput: HTMLElement,
    submitButton: HTMLElement

  beforeEach(() => {
    render(<Wrapper><Login /></Wrapper>)
    emailInput = screen.getByPlaceholderText('Пошта')
    passwordInput = screen.getByPlaceholderText('Пароль')
    submitButton = screen.getByRole('button', { name: /увійти/i })
  })

  test('form elements should exist', () => {
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  test('form submit', async () => {
    const emailValue: string = 'john@dou.com'
    const passwordValue: string = '123456'

    nock(ROOT_URL)
      .post('/live/login')
      .reply(200, { token: 'token' }, { 'Access-Control-Allow-Origin': '*' })

    fireEvent.change(emailInput, {
      target: {
        value: emailValue
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: passwordValue
      }
    })
    fireEvent.click(submitButton)

    await waitFor(() => { expect(nock.isDone()).toBe(true) })
  })
})
