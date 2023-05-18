// Core
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

// Store
import { setErrorMessage } from '../store/uiSlice';

// Instruments
import { queryClient } from '../lib/queryClient';
import { api } from '../api';

export function useUpdateProfile() {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: (profileInfo) => {
            return api.profile.updateProfile(profileInfo);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
        onError:   (error) => {
            const message = error?.response?.data?.message || error?.message;
            dispatch(setErrorMessage(message));
        },
    });
}
