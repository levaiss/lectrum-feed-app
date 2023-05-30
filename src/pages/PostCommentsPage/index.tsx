// Core
import { type FC } from 'react'
import { useParams, Navigate } from 'react-router-dom'

// Components
import { PostComments } from '../../components/PostComments'

// Hooks
import { usePostDetails } from '../../hooks/usePostDetails'

export const PostCommentsPage: FC = () => {
  const { postId } = useParams()
  if (!postId) {
    return <Navigate to='/feed'/>
  }

  const {
    status: postStatus,
    data: postData
  } = usePostDetails(postId)

  return (
        <PostComments
            status = { postStatus }
            post = { postData } />
  )
}
