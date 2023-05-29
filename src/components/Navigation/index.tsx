// Core
import { type FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type Dispatch } from 'redux'
import { type UseMutationResult } from '@tanstack/react-query'
import { type NavigateFunction, NavLink, useNavigate } from 'react-router-dom'
import { type UserModel } from '../../types/UserModel'

// Components
import { UiAvatar } from '../Ui/UiAvatar'

// Store
import { getUser, setUser } from '../../store/userSlice'

// Hooks
import { useProfile } from '../../hooks/useProfile'
import { useLogout } from '../../hooks/useLogout'

export const Navigation: FC = () => {
  const currentUser: UserModel | null = useSelector(getUser)
  const {
    data: userData
  } = useProfile()
  const navigate: NavigateFunction = useNavigate()
  const logout: UseMutationResult = useLogout()
  const dispatch: Dispatch = useDispatch()

  const handlerOnLogout = async (): Promise<void> => {
    // @ts-expect-error
    await logout.mutateAsync()
    navigate('/')
  }

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData))
    }
  }, [userData])

  function getNavLinkClasses ({ isActive }: { isActive: boolean }): string {
    return isActive ? 'navigation-item active' : 'navigation-item'
  }

  return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <UiAvatar
                        src = { currentUser?.avatar }
                        alt = 'User avatar'
                        className = 'navigation-avatar' />
                    <div className = 'user-status'>
                        <div className = 'status online'><span></span></div>
                    </div>
                </div>
                { currentUser?.name }
            </div>
            <NavLink
                to = '/profile'
                className = { getNavLinkClasses }>
                Профіль
            </NavLink>
            <NavLink
                to = '/feed'
                className = { getNavLinkClasses }>
                Стіна
            </NavLink>
            <button
                onClick = { () => { void handlerOnLogout() } }
                className = 'logout'>Вийти</button>
        </div>
  )
}
