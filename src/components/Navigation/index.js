import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    function getNavLinkClasses({ isActive }) {
        return isActive ? 'navigation-item active' : 'navigation-item';
    }

    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = 'User avatar'
                        className = 'navigation-avatar'  />
                    <div className = 'user-status'>
                        <div className = 'status online'><span></span></div>
                    </div>
                </div>
              Chuck Norris
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
