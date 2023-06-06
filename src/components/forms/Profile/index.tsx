/* Core */
import { type FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { type UseMutationResult } from '@tanstack/react-query'
import { type UserModel } from '../../../types/UserModel'
import { type updateProfileRequestData } from '../../../types/Api'

// Components
import { FormStyled } from '../../styled/FormStyled'
import { UiInput } from '../../Ui/UiInput'
import { UiAvatar } from '../../Ui/UiAvatar'

// Store
import { getUser, getUserName } from '../../../store/userSlice'

// Hooks
import { useUpdateProfile } from '../../../hooks/useUpdateProfile'

// Instruments
import { ProfileFormSchema } from './config'

export const Profile: FC = () => {
  const currentUser: UserModel | null = useSelector(getUser)
  const userName: string = useSelector(getUserName)
  const updateProfile: UseMutationResult<any, any, updateProfileRequestData> = useUpdateProfile()
  const {
    handleSubmit,
    formState,
    register,
    reset,
    setValue
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(ProfileFormSchema),
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  })

  const fillForm = (): void => {
    if (userName) {
      const [
        firstName,
        lastName
      ] = `${userName}`.split(' ')
      setValue('firstName', firstName)
      setValue('lastName', lastName)
    }
  }
  const submitForm = handleSubmit((profileInfo) => {
    void updateProfile.mutateAsync(profileInfo).then(() => {
      reset()
    })
  })

  useEffect(() => {
    fillForm()
  }, [userName])

  return (
        <FormStyled
            onSubmit = { submitForm }
            className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Привіт, { userName }</h1>
                    <UiAvatar src = { currentUser?.avatar } alt = 'User avatar' />
                    <UiInput
                        placeholder = "Ім'я"
                        autoComplete = 'firstName'
                        name = 'firstName'
                        autoFocus
                        error = { formState.errors.firstName }
                        register = { register('firstName') } />
                    <UiInput
                        placeholder = 'Призвіще'
                        autoComplete = 'lastName'
                        name = 'lastName'
                        error = { formState.errors.lastName }
                        register = { register('lastName') } />
                    <button className = 'loginSubmit' type = 'submit'>
                        Оновити профіль
                    </button>
                </div>
                <NavLink
                    to = '/profile/new-password'>
                    Змінити пароль →
                </NavLink>
            </div>
        </FormStyled>
  )
}
