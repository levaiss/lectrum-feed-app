/* Core */
import { type FC } from 'react'
import { useNavigate, NavLink, type NavigateFunction } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Components
import { LogoStyled } from '../../styled/LogoStyled'
import { FormStyled } from '../../styled/FormStyled'
import { UiInput } from '../../Ui/UiInput'

// Hooks
import { useSignUp } from '../../../hooks/useSignUp'

// Instruments
import { SignUpFormSchema } from './config'

export const SignUp: FC = () => {
  const signUp = useSignUp()
  const navigate: NavigateFunction = useNavigate()
  const {
    handleSubmit,
    formState,
    reset,
    register
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SignUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const submitForm = handleSubmit((payload) => {
    const {
      confirmPassword,
      ...userInfo
    } = payload

    void signUp.mutateAsync(userInfo).then(() => {
      reset()
      navigate('/feed')
    })
  })

  return (
        <FormStyled
            onSubmit = { submitForm }
            className = 'form centered'>
            <div className = 'wrapper centered'>
                <LogoStyled/>
                <div>
                    <UiInput
                        placeholder = "Ім'я"
                        autoComplete = 'name'
                        name = 'name'
                        autoFocus
                        error = { formState.errors.name }
                        register = { register('name') } />
                    <UiInput
                        placeholder = 'Пошта'
                        autoComplete = 'email'
                        name = 'email'
                        type = 'email'
                        error = { formState.errors.email }
                        register = { register('email') } />
                    <UiInput
                        placeholder = 'Пароль'
                        type = 'password'
                        name = 'password'
                        error = { formState.errors.password }
                        register = { register('password') } />
                    <UiInput
                        placeholder = 'Повторіть пароль'
                        type = 'password'
                        name = 'confirmPassword'
                        error = { formState.errors.confirmPassword }
                        register = { register('confirmPassword') } />
                    <button
                        type = 'submit'
                        className = 'signupSubmit'>
                        Створити акаунт
                    </button>
                </div>
                <p className = 'options'>
                    Є обліковий запис? <NavLink to = '/login'>Увійти</NavLink>
                </p>
            </div>
        </FormStyled>
  )
}
