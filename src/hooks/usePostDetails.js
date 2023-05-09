// Core
import { useQuery } from '@tanstack/react-query';

// Hooks
import { useStore } from './useStore';

// Instruments
import { api } from '../api';

export function usePostDetails(postId) {
    const {
        uiStore: { setErrorMessage },
    } = useStore();

    return useQuery({
        queryKey: ['postDetails', postId],
        queryFn:  async () => {
            const { data } = await api.posts.getPostById(postId);

            return data;
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            setErrorMessage(message);
        },
    });
}
