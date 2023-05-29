// Core
import { configureStore } from '@reduxjs/toolkit'

// Stores
import { authSlice, type authSliceState } from './authSlice'
import { uiSlice, type uiSliceState } from './uiSlice'
import { userSlice, type userSliceState } from './userSlice'
import { feedSlice, type feedSliceState } from './feedSlice'

export interface RootState {
  auth: authSliceState
  ui: uiSliceState
  user: userSliceState
  feed: feedSliceState
}

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    feed: feedSlice.reducer
  }
})
