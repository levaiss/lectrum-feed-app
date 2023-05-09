// Core
import { useMutation } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { queryClient } from '../lib/queryClient';
import { api } from '../api';

export function useUpdateProfile() {
    const {
        uiStore: { setErrorMessage },
    } = useStore();

    return useMutation({
        mutationFn: (profileInfo) => {
            return api.profile.updateProfile(profileInfo);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
        onError:   (error) => {
            const message = error?.response?.data?.message || error?.message;
            setErrorMessage(message);
        },
    });
}
