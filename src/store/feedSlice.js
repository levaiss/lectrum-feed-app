// Core
import { createSlice } from '@reduxjs/toolkit';

export const feedSlice = createSlice({
    name:         'feed',
    initialState: {
        activePostId: null,
    },
    reducers: {
        setActivePostId: (state, action) => {
            state.activePostId = action.payload;
        },
    },
});

export const getActivePostId = (state) => state.feed.activePostId;

export const { setActivePostId } = feedSlice.actions;
