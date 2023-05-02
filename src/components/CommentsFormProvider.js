// Core
import { useState } from 'react';

// Instruments
import { CommentsFormContext } from '../lib/CommentsFormContext';

export const CommentsFormProvider = ({ children }) => {
    const [activeCommentsForm, setActiveCommentsForm] = useState(null);

    return (
        <CommentsFormContext.Provider value = { {
            activeCommentsForm,
            setActiveCommentsForm,
        } }>
            { children }
        </CommentsFormContext.Provider>
    );
};
