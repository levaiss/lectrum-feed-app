// Core
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name:         'ui',
    initialState: {
        errorMessage: null,
    },
    reducers: {
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const getErrorMessage = (state) => state.ui.errorMessage;

export const { setErrorMessage } = uiSlice.actions;
