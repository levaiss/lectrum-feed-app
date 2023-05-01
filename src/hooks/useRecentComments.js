import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

export function useRecentComments() {
    return useQuery({
        queryKey: ['recentComments'],
        queryFn:  async () => {
            const { data } = await api.posts.getComments();

            return data;
        },
    });
}
