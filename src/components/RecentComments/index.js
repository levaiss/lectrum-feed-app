// Components
import { RecentComment } from '../RecentComment';

export const RecentComments = ({ comments }) => {
    const commentsList = comments.map(
        (comment) => <RecentComment
            comment = { comment }
            key = { comment.hash } />,
    );

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>
              Популярні коментарі
            </h1>
            <section>
                { commentsList }
            </section>
        </div>
    );
};
