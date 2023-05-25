// Core
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Store
import {
    getIsAuth, getTokenCheckStatus, setToken, setTokenCheckStatus,
} from '../store/authSlice';

// Instruments
import { api } from '../api';
import { FETCH_STATUS } from '../constants/fetch-status';

export function useRouteValidate() {
    const isAuth = useSelector(getIsAuth);
    const tokenCheckStatus = useSelector(getTokenCheckStatus);
    const dispatch = useDispatch();

    useEffect(() => {
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

    return {
        isAuth,
        tokenCheckStatus,
    };
}
