// Core
import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { type UserModel } from '../../../types/UserModel'

// Components
import { UiAvatar } from '../../Ui/UiAvatar'

// Hooks
import { getUser, getUserName } from '../../../store/userSlice'

export const Composer: FC = () => {
  const currentUser: UserModel | null = useSelector(getUser)
  const currentUserName: string = useSelector(getUserName)

  return (
        <section className = 'composer'>
            <UiAvatar src = { currentUser?.avatar } alt = 'User avatar' />
            <form>
                <textarea placeholder = { `What's on your mind, ${currentUserName}?` } name = 'body'></textarea>
                <button type = 'submit'>
                  Запостити
                </button>
            </form>
        </section>
  )
}
