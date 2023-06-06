// Core
import { type FC } from 'react'
import { type CommentModel } from '../../types/CommentModel'

// Components
import { RecentCommentsStyled } from '../styled/RecentCommentsStyled'
import { TitleStyled } from '../styled/TitleStyled'
import { LoadingOverlay } from '../LoadingOverlay'
import { RecentComment } from '../RecentComment'

interface RecentCommentsProps {
  status: string
  comments?: CommentModel[]
}

export const RecentComments: FC<RecentCommentsProps> = ({ status, comments }) => {
  return (
        <RecentCommentsStyled className = 'most-recent-comments'>
            <TitleStyled>
              Популярні коментарі
            </TitleStyled>
            <section>
                <LoadingOverlay status = { status }>
                    <>
                        {
                            Array.isArray(comments) && comments.map(
                              (comment) => <RecentComment
                                    comment = { comment }
                                    key = { comment.hash } />
                            )
                        }
                    </>
                </LoadingOverlay>
            </section>
        </RecentCommentsStyled>
  )
}
