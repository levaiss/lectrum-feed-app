// Core
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Hooks
import { useStore } from '../hooks/useStore';

// Instruments
import { api } from '../api';
import { FETCH_STATUS } from '../constants/fetch-status';

export const PublicRoute
    = observer(({
        children,
        restricted,
        redirectPath = '/',
    }) => {
        const {
            authStore: {
                isAuth,
                tokenCheckStatus,
                setTokenCheckStatus,
                setToken,
            },
        } = useStore();

        useEffect(() => {
            // TODO: Need refactoring

            const { token } = api;
            if (!token) {
                setTokenCheckStatus(FETCH_STATUS.success);

                return;
            }

            (async () => {
                try {
                    if (tokenCheckStatus !== FETCH_STATUS.idle) {
                        return false;
                    }

                    await api.auth.auth();
                    setToken(api.token);
                } catch (error) {
                    api.removeToken();
                } finally {
                    setTokenCheckStatus(FETCH_STATUS.success);
                }
            })();
        }, []);

        if (tokenCheckStatus !== FETCH_STATUS.success) {
            return null;
        }

        if (isAuth && restricted) {
            return <Navigate to = { redirectPath } />;
        }

        return children || <Outlet />;
    });
