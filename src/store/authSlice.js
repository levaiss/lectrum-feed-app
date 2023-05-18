// Core
import { createSlice } from '@reduxjs/toolkit';

import { FETCH_STATUS } from '../constants/fetch-status';

export const authSlice = createSlice({
    name:         'auth',
    initialState: {
        token:            null,
        tokenCheckStatus: 'idle',
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setTokenCheckStatus: (state, action) => {
            if (!Object.values(FETCH_STATUS)
                .includes(action.payload)) {
                throw new Error(`[AuthStore/setTokenCheckStatus] ${action.payload} non correct status.`);
            }

            state.tokenCheckStatus = action.payload;
        },
    },
});

export const getIsAuth = (state) => !!state.auth.token;

export const getTokenCheckStatus = (state) => state.auth.tokenCheckStatus;

export const { setToken, setTokenCheckStatus } = authSlice.actions;
