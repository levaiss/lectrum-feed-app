// Core
import { observer } from 'mobx-react-lite';

// Components
import { UiAvatar } from '../../Ui/UiAvatar';

// Hooks
import { useStore } from '../../../hooks/useStore';

export const Composer = observer(() => {
    const { userStore: { user: currentUser } } = useStore();

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
});
