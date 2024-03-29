// Core
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type RootState } from './index'
import { type Token } from '../types/common'
import { type newPasswordRequestData } from '../types/Api'

// Store
import { setErrorMessage } from './uiSlice'

// Instruments
import { api } from '../api'
import { FetchStatuses, type FetchStatusesType } from '../constants/fetch-status'
import { isAxiosError } from '../utils/helpers'

export interface authSliceState {
  token: string | null
  tokenCheckStatus: FetchStatusesType
}

const initialState: authSliceState = {
  token: null,
  tokenCheckStatus: FetchStatuses.idle
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setTokenCheckStatus: (state, action) => {
      if (!Object.values(FetchStatuses)
        .includes(action.payload)) {
        throw new Error('[AuthStore/setTokenCheckStatus] on correct status.')
      }

      state.tokenCheckStatus = action.payload
    }
  }
})

export const getIsAuth = (state: RootState): boolean => !!state.auth.token

export const getTokenCheckStatus = (state: RootState): FetchStatusesType => state.auth.tokenCheckStatus

export const { setToken, setTokenCheckStatus } = authSlice.actions

export const resetPassword = createAsyncThunk<Token, newPasswordRequestData, any>(
  'auth/resetPassword',
  async (body: newPasswordRequestData, thunkAPI) => {
    try {
      const { data: newToken } = await api.profile.resetPassword(body)
      api.setToken(newToken)
      thunkAPI.dispatch(setToken(newToken))

      return newToken
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        // @ts-expect-error
        const message = error?.response?.data?.message || error?.message
        thunkAPI.dispatch(setErrorMessage(message))
      }

      return null
    }
  }
)
