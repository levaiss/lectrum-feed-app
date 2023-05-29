// Core
import { type FC } from 'react'
import { type CommentModel } from '../../types/CommentModel'

// Components
import Moment from 'react-moment'

interface CommentProps {
  comment: CommentModel
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  return (
        <li className = 'commentBody'>
            <p>
                { comment?.author.name }
                <Moment
                    date = { comment.created }
                    element = 'span'
                    fromNow />
            </p>
            <p>{ comment.body }</p>
        </li>
  )
}
