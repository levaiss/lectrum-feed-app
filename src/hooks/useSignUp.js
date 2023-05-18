// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// Store
import { setErrorMessage } from '../store/uiSlice';
import { setToken } from '../store/authSlice';

// Instruments
import { api } from '../api';

export function useSignUp() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (userInfo) => {
            return api.auth.signup(userInfo);
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
