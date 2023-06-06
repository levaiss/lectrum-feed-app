// Core
import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import { type PostModel } from '../../types/PostModel'
import { type CommentModel } from '../../types/CommentModel'

// Components
import Moment from 'react-moment'
import { SubtitleStyled } from '../styled/SubtitleStyled'
import { TitleStyled } from '../styled/TitleStyled'
import { CommentStyled } from '../styled/CommentStyled'
import { LoadingOverlay } from '../LoadingOverlay'

interface PostCommentsProps {
  status: string
  post?: PostModel
}

export const PostComments: FC<PostCommentsProps> = ({ status, post }) => {
  return (
        <div className = 'wrapper'>
            <NavLink
                to = '/feed'
                className = 'link-back active'>
                <div className = 'arrow' />
                назад
            </NavLink>
            <TitleStyled>
                Коментарі до поста
            </TitleStyled>
            <LoadingOverlay status = { status }>
                <>
                    { post && <CommentStyled className = 'comment'>
                        <p className = 'name'>{ post?.author.name }</p>
                        <Moment
                            date = { post.created }
                            fromNow />
                        <p className = 'body'>
                            { post.body }
                        </p>
                        <SubtitleStyled>
                            Популярні коментарі
                        </SubtitleStyled>
                        <>
                            {
                                Array.isArray(post.comments) && post.comments.map(
                                  (comment: CommentModel) => <CommentStyled key = { comment.hash } className = 'comment'>
                                        <p>{ comment?.author.name }</p>
                                        <Moment
                                            date = { comment.created }
                                            fromNow />
                                        <p>{ comment.body }</p>
                                    </CommentStyled>
                                )
                            }
                        </>
                    </CommentStyled> }
                </>
            </LoadingOverlay>
        </div>
  )
}
