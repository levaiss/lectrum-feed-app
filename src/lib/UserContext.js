// Core
import { createContext, useEffect, useState } from 'react';

// Hooks
import { useProfile } from '../hooks/useProfile';

export const UserContext = createContext([null, (payload) => null]);

export const UserProvider = ({ children }) => {
    const userState = useState(null);
    const [, setCurrentUser] = userState;
    const {
        data: userData,
    } = useProfile();

    useEffect(() => {
        if (userData) {
            setCurrentUser(userData);
        }
    }, [userData]);

    return (
        <UserContext.Provider value = { userState }>
            { children }
        </UserContext.Provider>
    );
};
