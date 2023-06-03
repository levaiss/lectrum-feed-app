// Core
import axios from 'axios'
import nock from 'nock'
import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

// Hooks
import { useUpdateProfile } from '../useUpdateProfile'

// Instruments
import { ROOT_URL } from '../../api/config'

// Helpers
import { Wrapper } from '../../tests/helpers'

axios.defaults.adapter = require('axios/lib/adapters/http')

describe('useUpdateProfile', () => {
  it('should update user info', async () => {
    const {
      result,
      waitFor
    } = renderHook(() => useUpdateProfile(), { wrapper: Wrapper })
    const updateProfileInterceptor = nock(ROOT_URL)
      .put('/live/profile')
      .reply(200, {}, { 'Access-Control-Allow-Origin': '*' })

    act(() => {
      result.current.mutate({
        firstName: 'John',
        lastName: 'Dou'
      })
    })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.isSuccess).toBe(true)
    updateProfileInterceptor.done()
  })
  it('should return error fro server', async () => {
    const {
      result,
      waitFor
    } = renderHook(() => useUpdateProfile(), { wrapper })
    const updateProfileInterceptor = nock(ROOT_URL)
      .put('/live/profile')
      .reply(400, {}, { 'Access-Control-Allow-Origin': '*' })

    act(() => {
      result.current.mutate({
        firstName: 'John',
        lastName: 'Dou'
      })
    })

    await waitFor(() => {
      return result.current.isError
    })

    expect(result.current.isError).toBe(true)
    updateProfileInterceptor.done()
  })
})
