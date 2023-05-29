// Core
import { type FC } from 'react'
import { type PostModel } from '../../types/PostModel'

// Comments
import { LoadingOverlay } from '../LoadingOverlay'
import { Post } from '../Post'

interface PostsProps {
  status: string
  posts: PostModel[]
}

export const Posts: FC<PostsProps> = ({ status, posts }) => {
  return (
        <LoadingOverlay status = { status }>
            <>
                { Array.isArray(posts) && posts.map((post) => <Post
                    post = { post }
                    key = { post.hash } />)
                }
            </>
        </LoadingOverlay>
  )
}
