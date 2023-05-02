// Core
import { useContext, useState } from 'react';

// Components
import Moment from 'react-moment';
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';
import { CommentsForm } from '../forms/CommentsForm';
import { Comment } from '../Comment';

// Instruments
import { CommentsFormContext } from '../../lib/CommentsFormContext';

export const Post = ({ post }) => {
    const {
        activeCommentsForm,
        setActiveCommentsForm,
    } = useContext(CommentsFormContext);
    const isCommentsVisible = activeCommentsForm === post.hash;

    function handlerOnCommentsIconClick() {
        const newActiveCommentsForm = isCommentsVisible ? null : post.hash;
        setActiveCommentsForm(newActiveCommentsForm);
    }

    return (
        <section className = 'post'>
            <img src = { post.author.avatar } alt = { `${post.author.name} avatar` } />
            <a href = '#' title = 'Chuck Norris'>{ post.author.name }</a>
            <Moment
                date = { post.created }
                fromNow />
            <p>{ post.body }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div><span>{ post.likes.length }</span></div>
                    <span className = 'icon'>
                        <LikeIcon />
                        Like
                    </span>
                </section>
                <span
                    onClick = { handlerOnCommentsIconClick }
                    className = { `comment ${isCommentsVisible ? 'comment-fill' : ''}` }>
                    <CommentIcon className = 'comment-icon' />
                    { post.comments.length } comment
                </span>
            </div>
            { isCommentsVisible
                && <>
                    <CommentsForm />
                    <hr className = 'separator' />
                    <ul>
                        {
                            post.comments.map((comment) => <Comment
                                key = { comment.hash }
                                comment = { comment } />)
                        }
                    </ul>
                </>
            }
        </section>
    );
};
