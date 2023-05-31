import { type FC } from 'react'

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
        <label className = 'ui-input'>
            <div>{ label }</div>
            <input
                name = { name }
                type = { type }
                placeholder = { placeholder }
                { ...{ autoFocus, autoComplete } }
                { ...register } />
            { error && <span className = 'ui-input__error-message'>{ error.message }</span> }
        </label>
  )
}
