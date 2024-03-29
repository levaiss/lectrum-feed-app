// Core
import { type FC } from 'react'

// Components
import { InputStyled } from '../../styled/InputStyled'

interface UiInputProps {
  type?: string
  label?: string
  name: string
  placeholder: string
  autoFocus?: boolean
  autoComplete?: string
  register: any
  error: any
}

export const UiInput: FC<UiInputProps> = ({
  type = 'text', label, name, placeholder, autoFocus, autoComplete, register, error
}) => {
  return (
        <InputStyled as='label'>
            <div>{ label }</div>
            <input
                name = { name }
                type = { type }
                placeholder = { placeholder }
                { ...{ autoFocus, autoComplete } }
                { ...register } />
            { error && <span className = 'error-message'>{ error.message }</span> }
        </InputStyled>
  )
}
