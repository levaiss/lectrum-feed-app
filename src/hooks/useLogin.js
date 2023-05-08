// Core
import { useEffect } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { api } from '../api';
import { AUTH_TOKEN_KAY } from '../api/config';

export function useLogin() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (credentials) => {
            return api.auth.login(credentials);
        },
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem(AUTH_TOKEN_KAY, token);
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        }
    }, [mutation.isSuccess]);

    return mutation;
}
