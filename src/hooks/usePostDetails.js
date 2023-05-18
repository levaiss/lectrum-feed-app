// Core
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

// Store
import { setErrorMessage } from '../store/uiSlice';

// Instruments
import { api } from '../api';

export function usePostDetails(postId) {
    const dispatch = useDispatch();

    return useQuery({
        queryKey: ['postDetails', postId],
        queryFn:  async () => {
            const { data } = await api.posts.getPostById(postId);

            return data;
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            dispatch(setErrorMessage(message));
        },
    });
}
