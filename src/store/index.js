// Core
import { configureStore } from '@reduxjs/toolkit';

// Stores
import { authSlice } from './authSlice';
import { uiSlice } from './uiSlice';
import { userSlice } from './userSlice';
import { feedSlice } from './feedSlice';

export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui:   uiSlice.reducer,
        user: userSlice.reducer,
        feed: feedSlice.reducer,
    },
});
