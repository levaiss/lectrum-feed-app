// Components
import { RecentComment } from '../RecentComment';

export const RecentComments = () => {
    const comments = [1, 2, 3, 4, 5];
    const commentsList = comments.map(
        (number) => <RecentComment
            key = { number.toString() } />,
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
