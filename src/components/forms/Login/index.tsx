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
import { useLogin } from '../../../hooks/useLogin'

// Instruments
import { LoginFormSchema } from './config'

export const Login: FC = () => {
  const login = useLogin()
  const navigate: NavigateFunction = useNavigate()
  const {
    handleSubmit,
    formState,
    register,
    reset
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const submitForm = handleSubmit((credentials) => {
    void login.mutateAsync(credentials).then(() => {
      reset()
      navigate('/feed')
    })
  })

  return (
        <FormStyled
            onSubmit={submitForm}
            className='form centered'>
            <div className='wrapper centered'>
                <LogoStyled/>
                <div>
                    <UiInput
                        placeholder='Пошта'
                        autoComplete='email'
                        type='email'
                        name='email'
                        autoFocus
                        error={formState.errors.email}
                        register={register('email')}/>
                    <UiInput
                        placeholder='Пароль'
                        type='password'
                        name='password'
                        error={formState.errors.password}
                        register={register('password')}/>
                    <button
                        type='submit'
                        className='loginSubmit'>
                        Увійти
                    </button>
                </div>
                <p className='options'>
                    Немає облікового запису? <NavLink to='/signup'>Створити</NavLink>
                </p>
            </div>
        </FormStyled>
  )
}
