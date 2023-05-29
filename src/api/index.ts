// Core
import axios from 'axios'

// Instruments
import { AUTH_URL, FEED_URL, AUTH_TOKEN_KAY } from './config'

interface Api {
  token: string
  setToken: (token: string) => void
  removeToken: () => void
  [key: string]: any
}

export const api: Api = {
  get token (): string {
    return localStorage.getItem(AUTH_TOKEN_KAY) ?? ''
  },
  setToken (token: string): void {
    localStorage.setItem(AUTH_TOKEN_KAY, token)
  },
  removeToken (): void {
    localStorage.removeItem(AUTH_TOKEN_KAY)
  },
  auth: {
    async signup (userInfo: any) {
      const { data } = await axios.post(`${AUTH_URL}/register`, userInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return data
    },
    async login (credentials: any) {
      const { data } = await axios.post(`${AUTH_URL}/login`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })

      return data
    },
    async auth () {
      return await axios.get(`${AUTH_URL}/auth`, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })
    },
    async logout () {
      return await axios.get(`${AUTH_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })
    }
  },
  posts: {
    async fetch () {
      const { data } = await axios.get(FEED_URL, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    },
    async create (post: any) {
      const { data } = await axios.post(FEED_URL,
        post,
        {
          headers: {
            Authorization: `Bearer ${api.token}`
          }
        })

      return data
    },
    async getComments () {
      const { data } = await axios.get(`${FEED_URL}/comments`)

      return data
    },
    async getPostById (postHash: string) {
      const { data } = await axios.get(`${FEED_URL}/${postHash}`)

      return data
    }
  },
  profile: {
    async fetch () {
      const { data } = await axios.get(`${AUTH_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    },
    async updateProfile (profileInfo: any) {
      const { data } = await axios.put(`${AUTH_URL}/profile`, profileInfo, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    },
    async resetPassword (body: any) {
      const { data } = await axios.post(`${AUTH_URL}/reset-password`, body, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    }
  }
}
