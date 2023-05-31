// Core
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { type QueryClient, useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { type AxiosResponse } from 'axios'
import { type Token } from '../types/common'
import { type signUpRequestData } from '../types/Api'

// Store
import { setErrorMessage } from '../store/uiSlice'
import { setToken } from '../store/authSlice'

// Instruments
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function useSignUp (): UseMutationResult<AxiosResponse<Token>, any, signUpRequestData> {
  const dispatch: Dispatch = useDispatch()
  const queryClient: QueryClient = useQueryClient()
  const mutation: UseMutationResult<AxiosResponse<Token>, any, signUpRequestData> = useMutation({
    mutationFn: (userInfo: signUpRequestData) => {
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
