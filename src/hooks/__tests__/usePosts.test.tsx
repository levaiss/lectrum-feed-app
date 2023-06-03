// Core
import axios from 'axios'
import nock from 'nock'
import { renderHook } from '@testing-library/react-hooks'

// Hooks
import { usePosts } from '../usePosts'

// Instruments
import { ROOT_URL } from '../../api/config'

// Helpers
import { Wrapper } from '../../tests/helpers'
import { posts } from '../../tests/fake-data'

axios.defaults.adapter = require('axios/lib/adapters/http')

const postsInterceptor = nock(ROOT_URL)
  .get('/feed')
  .reply(200, { data: posts }, { 'Access-Control-Allow-Origin': '*' })

describe('usePosts', () => {
  test('Hook return correct data', async () => {
    const {
      result,
      waitFor
    } = renderHook(() => usePosts(), { wrapper: Wrapper })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.data).toEqual(posts)
    postsInterceptor.done()
  })
})
