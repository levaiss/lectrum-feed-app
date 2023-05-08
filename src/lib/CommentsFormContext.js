// Core
import { useState, createContext } from 'react';

export const CommentsFormContext = createContext([null, () => null]);

export const CommentsFormProvider = ({ children }) => {
    const activeCommentsState = useState(null);

    return (
        <CommentsFormContext.Provider value = { activeCommentsState }>
            { children }
        </CommentsFormContext.Provider>
    );
};
