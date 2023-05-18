// Core
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:         'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const getUser = (state) => state.user.user;

export const getUserName = (state) => state.user.user?.name;

export const { setUser } = userSlice.actions;
