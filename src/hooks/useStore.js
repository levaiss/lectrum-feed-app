// Core
import { useContext } from 'react';

// Instruments
import { StoreContext } from '../lib/StoreContext';

export const useStore = () => {
    return useContext(StoreContext);
};
