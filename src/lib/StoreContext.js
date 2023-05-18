// Core
import { Provider } from 'react-redux';

// Root store
import Store from '../store';

export const StoreProvider = ({ children }) => {
    return (
        <Provider store = { Store }>
            { children }
        </Provider>
    );
};
