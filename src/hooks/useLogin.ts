// Core
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { useQueryClient, useMutation, type UseMutationResult, type QueryClient } from '@tanstack/react-query'
import { type Token } from '../types/common'
import { type AxiosResponse } from 'axios'
import { type loginRequestData } from '../types/Api'

// Store
import { setToken } from '../store/authSlice'
import { setErrorMessage } from '../store/uiSlice'

// Instruments
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function useLogin (): UseMutationResult<AxiosResponse<Token>, any, loginRequestData> {
  const dispatch: Dispatch = useDispatch()
  const queryClient: QueryClient = useQueryClient()
  const mutation: UseMutationResult<AxiosResponse<Token>, any, loginRequestData> = useMutation({
    mutationFn: (credentials: loginRequestData) => {
      return api.auth.login(credentials)
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
