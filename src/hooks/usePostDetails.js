import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

export function usePostDetails(postId) {
    return useQuery({
        queryKey: ['postDetails', postId],
        queryFn:  async () => {
            const { data } = await api.posts.getPostById(postId);

            return data;
        },
    });
}
