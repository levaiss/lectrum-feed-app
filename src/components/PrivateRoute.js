// Core
import { Navigate, Outlet } from 'react-router-dom';

// Hooks
import { useRouteValidate } from '../hooks/useRouteValidate';

// Instruments
import { FETCH_STATUS } from '../constants/fetch-status';

export const PrivateRoute
    = ({
        children,
        redirectPath,
    }) => {
        const {
            isAuth,
            tokenCheckStatus,
        } = useRouteValidate();

        if (tokenCheckStatus !== FETCH_STATUS.success) {
            return null;
        }

        if (!isAuth) {
            return <Navigate to = { redirectPath } replace />;
        }

        return children || <Outlet />;
    };
