// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// Components
import { UiAvatar } from '../Ui/UiAvatar';

// Store
import { getUser, setUser } from '../../store/userSlice';

// Hooks
import { useProfile } from '../../hooks/useProfile';
import { useLogout } from '../../hooks/useLogout';

export const Navigation = () => {
    const currentUser = useSelector(getUser);
    const {
        data: userData,
    } = useProfile();
    const navigate = useNavigate();
    const logout = useLogout();
    const dispatch = useDispatch();

    const handlerOnLogout = async () => {
        await logout.mutateAsync();
        navigate('/');
    };

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData));
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
            <button
                onClick = { handlerOnLogout }
                className = 'logout'>Вийти</button>
        </div>
    );
};
