// Core
import { useQuery } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { api } from '../api';


export function useProfile() {
    const {
        uiStore: { setErrorMessage },
    } = useStore();

    return useQuery({
        queryKey: ['profile'],
        queryFn:  async () => {
            const { data } = await api.profile.fetch();

            return data;
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            setErrorMessage(message);
        },
    });
}
