// Core
import { type FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { type PostModel } from '../../types/PostModel'
import { type CommentModel } from '../../types/CommentModel'

// Components
import Moment from 'react-moment'
import { LikeIcon } from '../../theme/assets/like'
import { CommentIcon } from '../../theme/assets/comment'
import { CommentsForm } from '../forms/CommentsForm'
import { Comment } from '../Comment'
import { UiAvatar } from '../Ui/UiAvatar'

// Store
import { getActivePostId, setActivePostId } from '../../store/feedSlice'

interface PostProps {
  post: PostModel
}

export const Post: FC<PostProps> = ({ post }) => {
  const activePostId: string | null = useSelector(getActivePostId)
  const dispatch: Dispatch = useDispatch()
  const isCommentsVisible: boolean = activePostId === post.hash

  function handlerOnCommentsIconClick (): void {
    const newActivePostId: string | null = isCommentsVisible ? null : post.hash
    dispatch(setActivePostId(newActivePostId))
  }

  return (
        <section className = 'post'>
            <UiAvatar src = { post?.author.avatar } alt = { `${post?.author.name} avatar` } />
            <a href = '#' title = { post?.author.name }>{ post?.author.name }</a>
            <Moment
                date = { post.created }
                fromNow />
            <p>{ post.body }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div><span>{ Array.isArray(post.likes) && post.likes.length }</span></div>
                    <span className = 'icon'>
                        <LikeIcon />
                        Like
                    </span>
                </section>
                <span
                    onClick = { handlerOnCommentsIconClick }
                    className = { `comment ${isCommentsVisible ? 'comment-fill' : ''}` }>
                    <CommentIcon className = 'comment-icon' />
                    { Array.isArray(post.comments) && post.comments.length } comment
                </span>
            </div>
            { isCommentsVisible &&
                <>
                    <CommentsForm />
                    <hr className = 'separator' />
                    <ul>
                        {
                            Array.isArray(post.comments) && post.comments.map(
                              (comment: CommentModel) => <Comment
                                    key = { comment.hash }
                                    comment = { comment } />
                            )
                        }
                    </ul>
                </>
            }
        </section>
  )
}
