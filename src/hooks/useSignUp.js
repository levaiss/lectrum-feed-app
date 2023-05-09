// Core
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { api } from '../api';

export function useSignUp() {
    const { authStore: { setToken } } = useStore();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (userInfo) => {
            const response = await api.auth.signup(userInfo);

            return response.json();
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
