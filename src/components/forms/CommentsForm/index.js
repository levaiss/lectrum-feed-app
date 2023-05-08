// Core
import { useContext } from 'react';

// Components
import { UiAvatar } from '../../Ui/UiAvatar';

// Instruments
import { UserContext } from '../../../lib/UserContext';

export const CommentsForm = () => {
    const [currentUser] = useContext(UserContext);

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
