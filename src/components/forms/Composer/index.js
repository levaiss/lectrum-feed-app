// Core
import { useSelector } from 'react-redux';

// Components
import { UiAvatar } from '../../Ui/UiAvatar';

// Hooks
import { getUser } from '../../../store/userSlice';

export const Composer = () => {
    const currentUser = useSelector(getUser);

    return (
        <section className = 'composer'>
            <UiAvatar src = { currentUser?.avatar } alt = 'User avatar' />
            <form>
                <textarea placeholder = { `What's on your mind, ${currentUser?.name}?` } name = 'body'></textarea>
                <button type = 'submit'>
                  Запостити
                </button>
            </form>
        </section>
    );
};
