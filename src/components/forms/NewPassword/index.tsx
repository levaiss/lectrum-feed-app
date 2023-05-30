// Core
import { type FC } from 'react'
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { type NavigateFunction, NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Components
import { UiInput } from '../../Ui/UiInput'

// Store
import { resetPassword } from '../../../store/authSlice'

// Instruments
import { type newPasswordRequestData } from '../../../types/Api'
import { NewPasswordFormSchema } from './config'

export const NewPassword: FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const dispatch: Dispatch = useDispatch()
  const {
    handleSubmit,
    formState,
    register,
    reset
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(NewPasswordFormSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: ''
    }
  })

  const submitForm = handleSubmit(async (body: newPasswordRequestData): Promise<void> => {
    // @ts-expect-error
    dispatch(resetPassword(body)).then(({ payload }) => {
      if (payload) {
        reset()
        navigate('/feed')
      }
    })
  })

  return (
        <form
            onSubmit = { submitForm }
            className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Зміна пароля</h1>
                    <UiInput
                        type = 'password'
                        name = 'oldPassword'
                        placeholder = 'Старий пароль'
                        autoFocus
                        error = { formState.errors.oldPassword }
                        register = { register('oldPassword') } />
                    <UiInput
                        type = 'password'
                        name = 'newPassword'
                        placeholder = 'Новий пароль'
                        error = { formState.errors.newPassword }
                        register = { register('newPassword') } />
                    <button className = 'loginSubmit' type = 'submit'>
                        Змінити пароль
                    </button>
                </div>
                <NavLink
                    to = '/profile'>
                    ← Назад
                </NavLink>
            </div>
        </form>
  )
}
