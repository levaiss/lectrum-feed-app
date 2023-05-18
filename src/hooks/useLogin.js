// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQueryClient, useMutation } from '@tanstack/react-query';

// Store
import {
    setToken,
} from '../store/authSlice';
import { setErrorMessage } from '../store/uiSlice';

// Instruments
import { api } from '../api';

export function useLogin() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (credentials) => {
            return api.auth.login(credentials);
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            dispatch(setErrorMessage(message));
        },
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            api.setToken(token);
            dispatch(setToken(token));
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        }
    }, [mutation.isSuccess]);

    return mutation;
}
