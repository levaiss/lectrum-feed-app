// Core
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'

// Store
import { setErrorMessage } from '../store/uiSlice'

// Instruments
import { queryClient } from '../lib/queryClient'
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function useUpdateProfile (): UseMutationResult {
  const dispatch: Dispatch = useDispatch()

  return useMutation({
    mutationFn: (profileInfo) => {
      return api.profile.updateProfile(profileInfo)
    },
    onSuccess: async () => { await queryClient.invalidateQueries({ queryKey: ['profile'] }) },
    onError: (error) => {
      if (isAxiosError(error)) {
        // @ts-expect-error
        const message = error?.response?.data?.message || error?.message
        dispatch(setErrorMessage(message))
      }
    }
  })
}
