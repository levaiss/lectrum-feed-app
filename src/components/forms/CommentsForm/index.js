// Core
import { observer } from 'mobx-react-lite';

// Components
import { UiAvatar } from '../../Ui/UiAvatar';

// Hooks
import { useStore } from '../../../hooks/useStore';

export const CommentsForm = observer(() => {
    const { userStore: { user: currentUser } } = useStore();

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
});
