// Core
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';


export function useProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn:  async () => {
            const { data } = await api.profile.fetch();

            return data;
        },
    });
}
