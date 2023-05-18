// Core
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

// Store
import { setErrorMessage } from '../store/uiSlice';

// Instruments
import { api } from '../api';

export function usePosts() {
    const dispatch = useDispatch();

    return useQuery({
        queryKey: ['posts'],
        queryFn:  async () => {
            const { data } = await api.posts.fetch();

            return data;
        },
        onError: (error) => {
            const message = error?.response?.data?.message || error?.message;
            dispatch(setErrorMessage(message));
        },
    });
}
