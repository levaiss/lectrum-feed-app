// Core
import { useContext } from 'react';

// Components
import Moment from 'react-moment';
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';
import { CommentsForm } from '../forms/CommentsForm';
import { Comment } from '../Comment';

// Instruments
import { CommentsFormContext } from '../../lib/CommentsFormContext';

export const Post = ({ post }) => {
    const [
        activeCommentsForm,
        setActiveCommentsForm,
    ] = useContext(CommentsFormContext);
    const isCommentsVisible = activeCommentsForm === post.hash;

    function handlerOnCommentsIconClick() {
        const newActiveCommentsForm = isCommentsVisible ? null : post.hash;
        setActiveCommentsForm(newActiveCommentsForm);
    }

    return (
        <section className = 'post'>
            <img src = { post?.author.avatar } alt = { `${post?.author.name} avatar` } />
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
            { isCommentsVisible
                && <>
                    <CommentsForm />
                    <hr className = 'separator' />
                    <ul>
                        {
                            Array.isArray(post.comments) && post.comments.map(
                                (comment) => <Comment
                                    key = { comment.hash }
                                    comment = { comment } />,
                            )
                        }
                    </ul>
                </>
            }
        </section>
    );
};
