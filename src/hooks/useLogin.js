// Core
import { useEffect } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { api } from '../api';

export function useLogin() {
    const { authStore: { setToken } } = useStore();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (credentials) => {
            return api.auth.login(credentials);
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
