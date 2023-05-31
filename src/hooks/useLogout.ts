// Core
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'

// Store
import { setUser } from '../store/userSlice'
import { setToken } from '../store/authSlice'
import { setErrorMessage } from '../store/uiSlice'

// Instruments
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function useLogout (): UseMutationResult {
  const dispatch: Dispatch = useDispatch()
  const mutation: UseMutationResult = useMutation({
    mutationFn: () => {
      return api.auth.logout()
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        // @ts-expect-error
        const message = error?.response?.data?.message || error?.message
        dispatch(setErrorMessage(message))
      }
    }
  })

  useEffect(() => {
    if (mutation.isSuccess) {
      api.removeToken()
      dispatch(setToken(null))
      dispatch(setUser(null))
    }
  }, [mutation.isSuccess])

  return mutation
}
