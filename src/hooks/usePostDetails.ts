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

export function usePostDetails (postId: string): UseQueryResult<PostModel> {
  const dispatch: Dispatch = useDispatch()

  return useQuery({
    queryKey: ['postDetails', postId],
    queryFn: async (): Promise<PostModel> => {
      const { data } = await api.posts.getPostById(postId)

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
