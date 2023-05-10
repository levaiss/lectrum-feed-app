// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { configure } from 'mobx';

// Components
import { App } from './App';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import 'moment-timezone';

// Context providers
import { queryClient } from './lib/queryClient';
import { StoreProvider } from './lib/StoreContext';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <QueryClientProvider client = { queryClient }>
                <StoreProvider>
                    <App />
                </StoreProvider>
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </BrowserRouter>,
    );
