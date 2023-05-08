// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Components
import { queryClient } from './lib/queryClient';
import { CommentsFormProvider } from './lib/CommentsFormContext';
import { UserProvider } from './lib/UserContext';
import { App } from './App';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import 'moment-timezone';

createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <QueryClientProvider client = { queryClient }>
                <UserProvider>
                    <CommentsFormProvider>
                        <App />
                    </CommentsFormProvider>
                </UserProvider>
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </BrowserRouter>,
    );
