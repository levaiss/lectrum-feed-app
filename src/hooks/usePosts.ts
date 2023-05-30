// Core
import { useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type PostModel } from '../types/PostModel'

// Store
import { setErrorMessage } from '../store/uiSlice'

// Instruments
import { api } from '../api'
import { isAxiosError } from '../utils/helpers'

export function usePosts (): UseQueryResult<PostModel[]> {
  const dispatch: Dispatch = useDispatch()

  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<PostModel[]> => {
      const { data } = await api.posts.fetch()

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
