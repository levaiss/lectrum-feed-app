// Components
import { LoadingOverlay } from '../LoadingOverlay';
import { RecentComment } from '../RecentComment';

export const RecentComments = ({ status, comments }) => {
    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>
              Популярні коментарі
            </h1>
            <section>
                <LoadingOverlay status = { status }>
                    <>
                        {
                            comments?.map((comment) => <RecentComment
                                comment = { comment }
                                key = { comment.hash } />)
                        }
                    </>
                </LoadingOverlay>
            </section>
        </div>
    );
};
