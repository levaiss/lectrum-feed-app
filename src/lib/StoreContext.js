import { createContext } from 'react';
import { RootStore } from './mobx';

const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider value = { rootStore }>
            { children }
        </StoreContext.Provider>
    );
};
