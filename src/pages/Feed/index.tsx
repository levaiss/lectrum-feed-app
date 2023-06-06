/* Core */
import { type FC } from 'react'

// Components
import { TitleStyled } from '../../components/styled/TitleStyled'
import { PostsStyled } from '../../components/styled/PostsStyled'
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
            <PostsStyled>
                <TitleStyled>Стіна</TitleStyled>
                <Composer />
                <Posts
                    status = { postsFetchStatus }
                    posts = { postsData } />
            </PostsStyled>
            <RecentComments
                status = { recentCommentsFetchStatus }
                comments = { recentCommentsData } />
        </>
  )
}
