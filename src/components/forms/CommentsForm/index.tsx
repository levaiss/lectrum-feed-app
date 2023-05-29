// Core
import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { type UserModel } from '../../../types/UserModel'

// Components
import { UiAvatar } from '../../Ui/UiAvatar'

// Store
import { getUser } from '../../../store/userSlice'

export const CommentsForm: FC = () => {
  const currentUser: UserModel | null = useSelector(getUser)

  return (
        <form className = 'commentForm'>
            <UiAvatar
                src = { currentUser?.avatar }
                className = 'comment-avatar'
                alt = 'User avatar' />
            <label>
                <input
                    type = 'text'
                    placeholder = 'Коментарій...'
                    name = 'body' />
            </label>
            <button type = 'submit'>
                Коментувати
            </button>
        </form>
  )
}
