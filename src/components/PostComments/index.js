// Core
import { NavLink } from 'react-router-dom';

// Components
import Moment from 'react-moment';
import { LoadingOverlay } from '../LoadingOverlay';

export const PostComments = ({ status, post }) => {
    return (
        <div className = 'wrapper'>
            <NavLink
                to = '/feed'
                className = 'link-back active'>
                <div className = 'arrow' />
                назад
            </NavLink>
            <h1 className = 'title'>
                Коментарі до поста
            </h1>
            <LoadingOverlay status = { status }>
                { post && <section>
                    <div className = 'comment'>
                        <p className = 'name'>{ post?.author.name }</p>
                        <Moment
                            date = { post.created }
                            fromNow />
                        <p className = 'body'>
                            { post.body }
                        </p>
                        <p className = 'subtitle'>
                            Популярні коментарі
                        </p>
                        <>
                            {
                                Array.isArray(post.comments) && post.comments.map(
                                    (comment) => <div key = { comment.hash } className = 'comment'>
                                        <p>{ comment?.author.name }</p>
                                        <Moment
                                            date = { comment.created }
                                            fromNow />
                                        <p>{ comment.body }</p>
                                    </div>,
                                )
                            }
                        </>
                    </div>
                </section> }
            </LoadingOverlay>
        </div>
    );
};
