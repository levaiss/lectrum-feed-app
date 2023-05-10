// Core
import { useQuery } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { api } from '../api';

export function usePosts() {
    const {
        uiStore: { setErrorMessage },
    } = useStore();

    return useQuery({
        queryKey: ['posts'],
        queryFn:  async () => {
            const { data } = await api.posts.fetch();

            return data;
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            setErrorMessage(message);
        },
    });
}
