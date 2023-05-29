// Core
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { type QueryClient, useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

// Store
import { setErrorMessage } from '../store/uiSlice'
import { setToken } from '../store/authSlice'

// Instruments
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function useSignUp (): UseMutationResult {
  const dispatch: Dispatch = useDispatch()
  const queryClient: QueryClient = useQueryClient()
  const mutation: UseMutationResult = useMutation({
    mutationFn: (userInfo) => {
      return api.auth.signup(userInfo)
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
    const token = mutation.data?.data

    if (mutation.isSuccess && token) {
      api.setToken(token)
      dispatch(setToken(token))
      void queryClient.invalidateQueries({ queryKey: ['profile'] })
    }
  }, [mutation.isSuccess])

  return mutation
}
