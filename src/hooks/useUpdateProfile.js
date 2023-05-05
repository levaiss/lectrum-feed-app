// Core
import { useMutation } from '@tanstack/react-query';

import { api } from '../api';

export function useUpdateProfile() {
    return useMutation({
        mutationFn: async (profileInfo) => {
            const response = await api.profile.updateProfile(profileInfo);

            return response.json();
        },
    });
}
