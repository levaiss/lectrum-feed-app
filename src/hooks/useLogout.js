// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

// Store
import { setUser } from '../store/userSlice';
import { setToken } from '../store/authSlice';
import { setErrorMessage } from '../store/uiSlice';

// Instruments
import { api } from '../api';

export function useLogout() {
    const dispatch = useDispatch();
    const mutation = useMutation({
        mutationFn: () => {
            return api.auth.logout();
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            dispatch(setErrorMessage(message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            api.removeToken();
            dispatch(setToken(null));
            dispatch(setUser(null));
        }
    }, [mutation.isSuccess]);

    return mutation;
}
