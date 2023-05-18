// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Store
import {
    getIsAuth, getTokenCheckStatus, setToken, setTokenCheckStatus,
} from '../store/authSlice';

// Instruments
import { api } from '../api';
import { FETCH_STATUS } from '../constants/fetch-status';

export const PrivateRoute
    = ({
        children,
        redirectPath,
    }) => {
        const isAuth = useSelector(getIsAuth);
        const tokenCheckStatus = useSelector(getTokenCheckStatus);
        const dispatch = useDispatch();

        useEffect(() => {
            // TODO: Need refactoring

            const { token } = api;
            if (!token) {
                dispatch(setTokenCheckStatus(FETCH_STATUS.success));

                return;
            }

            (async () => {
                try {
                    if (tokenCheckStatus !== FETCH_STATUS.idle) {
                        return false;
                    }

                    await api.auth.auth();
                    dispatch(setToken(api.token));
                } catch (error) {
                    api.removeToken();
                } finally {
                    dispatch(setTokenCheckStatus(FETCH_STATUS.success));
                }
            })();
        }, []);

        if (tokenCheckStatus !== FETCH_STATUS.success) {
            return null;
        }

        if (!isAuth) {
            return <Navigate to = { redirectPath } replace />;
        }

        return children || <Outlet />;
    };
