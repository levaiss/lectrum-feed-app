// Core
import React from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import 'moment-timezone';

// App
import { App } from './App';

// Components
import { CommentsFormProvider } from './components/CommentsFormProvider';

createRoot(document.getElementById('root'))
    .render(
        <CommentsFormProvider>
            <App />
        </CommentsFormProvider>,
    );
