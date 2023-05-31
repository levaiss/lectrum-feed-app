// Core
import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import { type CommentModel } from '../../types/CommentModel'

// Components
import Moment from 'react-moment'

interface RecentCommentProps {
  comment: CommentModel
}

export const RecentComment: FC<RecentCommentProps> = ({ comment }) => {
  return (
        <div className = 'comment'>
            <p className = 'name'>
                { comment?.author.name }
            </p>
            <Moment
                date = { comment.created }
                fromNow />
            <p className = 'body'>
                { comment.body }
            </p>
            <NavLink
                to = { `/feed/${comment?.post.hash}` }
                title = 'More comments'>
                Більше коментарів до посту
            </NavLink>
        </div>
  )
}
