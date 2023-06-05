/* Core */
import { type FC } from 'react'

// Components
import { Posts } from '../../components/Posts'
import { RecentComments } from '../../components/RecentComments'
import { Composer } from '../../components/forms/Composer'

// Hooks
import { usePosts } from '../../hooks/usePosts'
import { useRecentComments } from '../../hooks/useRecentComments'

export const Feed: FC = () => {
  const {
    status: postsFetchStatus,
    data: postsData
  } = usePosts()
  const {
    status: recentCommentsFetchStatus,
    data: recentCommentsData
  } = useRecentComments()

  return (
        <>
            <div className = 'posts'>
                <h1 className = 'title'>Стіна</h1>
                <Composer />
                <Posts
                    status = { postsFetchStatus }
                    posts = { postsData } />
            </div>
            <RecentComments
                status = { recentCommentsFetchStatus }
                comments = { recentCommentsData } />
        </>
  )
}