// Core
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import { UiAvatar } from '../Ui/UiAvatar';

// Instruments
import { useProfile } from '../../hooks/useProfile';
import { useStore } from '../../hooks/useStore';

export const Navigation = observer(() => {
    const {
        data: userData,
    } = useProfile();
    const { userStore: { user: currentUser, setUser } } = useStore();

    useEffect(() => {
        if (userData) {
            setUser(userData);
        }
    }, [userData]);

    function getNavLinkClasses({ isActive }) {
        return isActive ? 'navigation-item active' : 'navigation-item';
    }

    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <UiAvatar
                        src = { currentUser?.avatar }
                        alt = 'User avatar'
                        className = 'navigation-avatar' />
                    <div className = 'user-status'>
                        <div className = 'status online'><span></span></div>
                    </div>
                </div>
                { currentUser?.name }
            </div>
            <NavLink
                to = '/profile'
                className = { getNavLinkClasses }>
                Профіль
            </NavLink>
            <NavLink
                to = '/feed'
                className = { getNavLinkClasses }>
                Стіна
            </NavLink>
            <button className = 'logout'>Вийти</button>
        </div>
    );
});
