// Core
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import { UserContext } from '../../lib/UserContext';

export const Navigation = () => {
    const [currentUser] = useContext(UserContext);

    function getNavLinkClasses({ isActive }) {
        return isActive ? 'navigation-item active' : 'navigation-item';
    }

    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = { currentUser?.avatar }
                        alt = 'User avatar'
                        className = 'navigation-avatar'  />
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
};
