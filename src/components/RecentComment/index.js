// Core
import { NavLink } from 'react-router-dom';

// Components
import Moment from 'react-moment';

export const RecentComment = ({ comment }) => {
    return (
        <div className = 'comment'>
            <p className = 'name'>
                { comment?.author.name }
            </p>
            <Moment
                date = { comment.created }
                fromNow />
            <p className = 'body'>
                { comment.body }
            </p>
            <NavLink
                to = { `/feed/${comment?.post.hash}` }
                title = 'More comments'>
                Більше коментарів до посту
            </NavLink>
        </div>
    );
};
