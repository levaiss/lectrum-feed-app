// Core
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Hooks
import { useStore } from '../../hooks/useStore';

export const HomePage = observer(() => {
    const {
        authStore: {
            isAuth,
        },
    } = useStore();

    if (!isAuth) {
        return <Navigate to = '/login' replace />;
    }

    return <Navigate to = '/feed' replace />;
});
