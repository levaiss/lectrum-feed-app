// Core
import { useSelector } from 'react-redux';

// Components
import { UiAvatar } from '../../Ui/UiAvatar';

// Store
import { getUser } from '../../../store/userSlice';

export const CommentsForm = () => {
    const currentUser = useSelector(getUser);

    return (
        <form className = 'commentForm'>
            <UiAvatar
                src = { currentUser?.avatar }
                className = 'comment-avatar'
                alt = 'User avatar' />
            <label>
                <input
                    type = 'text'
                    placeholder = 'Коментарій...'
                    name = 'body' />
            </label>
            <button type = 'submit'>
                Коментувати
            </button>
        </form>
    );
};
