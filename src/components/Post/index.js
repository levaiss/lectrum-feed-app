// Core
import { observer } from 'mobx-react-lite';

// Components
import Moment from 'react-moment';
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';
import { CommentsForm } from '../forms/CommentsForm';
import { Comment } from '../Comment';
import { UiAvatar } from '../Ui/UiAvatar';

// Hoots
import { useStore } from '../../hooks/useStore';

export const Post = observer(({ post }) => {
    const {
        feedStore: {
            activePostId,
            setActivePostId,
        },
    } = useStore();
    const isCommentsVisible = activePostId === post.hash;

    function handlerOnCommentsIconClick() {
        const newActivePostId = isCommentsVisible ? null : post.hash;
        setActivePostId(newActivePostId);
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
});
