// Core
import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// Store
import {
  getIsAuth
} from '../../store/authSlice'

export const HomePage: FC = () => {
  const isAuth = useSelector(getIsAuth)

  if (!isAuth) {
    return <Navigate to = '/login' replace />
  }

  return <Navigate to = '/feed' replace />
}
