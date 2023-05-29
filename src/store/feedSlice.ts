// Core
import { createSlice } from '@reduxjs/toolkit'
import { type RootState } from './index'

export interface feedSliceState {
  activePostId: string | null
}

const initialState: feedSliceState = {
  activePostId: null
}

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setActivePostId: (state: feedSliceState, action) => {
      state.activePostId = action.payload
    }
  }
})

export const getActivePostId = (state: RootState): string | null => state.feed.activePostId

export const { setActivePostId } = feedSlice.actions
