// Core
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Store
import {
    getIsAuth,
} from '../../store/authSlice';

export const HomePage = () => {
    const isAuth = useSelector(getIsAuth);

    if (!isAuth) {
        return <Navigate to = '/login' replace />;
    }

    return <Navigate to = '/feed' replace />;
};
