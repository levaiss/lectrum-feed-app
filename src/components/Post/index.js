// Components
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';

export const Post = () => {
    return (
        <section className = 'post'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'User avatar' />
            <a href = '#' title = 'Chuck Norris'>Chuck Norris</a>
            <time>{ 'про 8 годин тому' }</time>
            <p>{ 'I\'m not afraid of dying, I\'m afraid of not trying. ~ Jay Z, музичний.' }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div><span>0</span></div>
                    <span className = 'icon'>
                        <LikeIcon />
                      Like
                    </span>
                </section>
                <span className = 'comment'>
                    <CommentIcon className = 'comment-icon' />
                  1 comment
                </span>
            </div>
        </section>
    );
};
