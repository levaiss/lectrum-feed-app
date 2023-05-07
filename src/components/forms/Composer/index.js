// Core
import { useContext } from 'react';

// Components
import { UiAvatar } from '../../Ui/UiAvatar';

// Instruments
import { UserContext } from '../../../lib/UserContext';

export const Composer = () => {
    const [currentUser] = useContext(UserContext);

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
