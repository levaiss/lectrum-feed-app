// Components
import Moment from 'react-moment';

export const Comment = ({ comment }) => {
    return (
        <li className = 'commentBody'>
            <p>
                { comment.author.name }
                <Moment
                    date = { comment.created }
                    element = 'span'
                    fromNow />
            </p>
            <p>{ comment.body }</p>
        </li>
    );
};
