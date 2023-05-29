// Core
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

// Store
import { setErrorMessage } from '../store/uiSlice'

// Instruments
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function useProfile (): UseQueryResult {
  const dispatch: Dispatch = useDispatch()

  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await api.profile.fetch()

      return data
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        // @ts-expect-error
        const message = error?.response?.data?.message || error?.message
        dispatch(setErrorMessage(message))
      }
    }
  })
}
