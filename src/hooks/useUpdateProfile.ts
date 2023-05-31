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
import { type updateProfileRequestData } from '../types/Api'

export function useUpdateProfile (): UseMutationResult<any, any, updateProfileRequestData> {
  const dispatch: Dispatch = useDispatch()

  return useMutation({
    mutationFn: (profileInfo: updateProfileRequestData) => {
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
