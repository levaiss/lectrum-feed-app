// Core
import { Navigate, Outlet } from 'react-router-dom';

// Hooks
import { useRouteValidate } from '../hooks/useRouteValidate';

// Instruments
import { FETCH_STATUS } from '../constants/fetch-status';

export const PublicRoute
    = ({
        children,
        restricted,
        redirectPath = '/',
    }) => {
        const {
            isAuth,
            tokenCheckStatus,
        } = useRouteValidate();

        if (tokenCheckStatus !== FETCH_STATUS.success) {
            return null;
        }

        if (isAuth && restricted) {
            return <Navigate to = { redirectPath } />;
        }

        return children || <Outlet />;
    };
