import {
    ERROR_MESSAGE,
    LOADING_MESSAGE,
} from '../constants/statusMessages';

export const LoadingOverlay = ({ status, children }) => {
    return (
        <>
            { status === 'loading'
              && (<span className = 'status-message'>{ LOADING_MESSAGE }</span>)
            }
            { status === 'error'
              && (<span className = 'status-message'>{ ERROR_MESSAGE }</span>)
            }
            { children }
        </>
    );
};
