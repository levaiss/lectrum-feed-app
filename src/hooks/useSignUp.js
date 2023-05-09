// Core
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { api } from '../api';

export function useSignUp() {
    const {
        authStore: { setToken },
        uiStore: { setErrorMessage },
    } = useStore();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (userInfo) => {
            return api.auth.signup(userInfo);
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            setErrorMessage(message);
        },
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            api.setToken(token);
            setToken(token);
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        }
    }, [mutation.isSuccess]);

    return mutation;
}
