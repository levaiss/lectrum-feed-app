// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';

// components
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App } from './App';
import { queryClient } from './lib/queryClient';
import { CommentsFormProvider } from './components/CommentsFormProvider';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import 'moment-timezone';

createRoot(document.getElementById('root'))
    .render(
        <QueryClientProvider client = { queryClient }>
            <CommentsFormProvider>
                <App />
            </CommentsFormProvider>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>,
    );
