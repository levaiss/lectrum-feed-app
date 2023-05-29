// Core
import { type FC } from 'react'
import { type CommentModel } from '../../types/CommentModel'

// Components
import { LoadingOverlay } from '../LoadingOverlay'
import { RecentComment } from '../RecentComment'

interface RecentCommentsProps {
  status: string
  comments: CommentModel[]
}

export const RecentComments: FC<RecentCommentsProps> = ({ status, comments }) => {
  return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>
              Популярні коментарі
            </h1>
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
        </div>
  )
}
