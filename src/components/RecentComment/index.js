// Components
import Moment from 'react-moment';

export const RecentComment = ({ comment }) => {
    return (
        <div className = 'comment'>
            <p className = 'name'>
                { comment.author.name }
            </p>
            <Moment
                date = { comment.created }
                fromNow />
            <p className = 'body'>
                { comment.body }
            </p>
            <a href = '#' title = 'More comments'>Більше коментарів до посту</a>
        </div>
    );
};
