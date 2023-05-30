// Core
import axios, { type AxiosResponse } from 'axios'
import { type Token } from '../types/common'
import { type PostModel } from '../types/PostModel'
import { type CommentModel } from '../types/CommentModel'
import {
  type Api,
  type signUpRequestData,
  type newPasswordRequestData,
  type loginRequestData,
  type updateProfileRequestData
} from '../types/Api'

// Instruments
import { AUTH_URL, FEED_URL, AUTH_TOKEN_KAY } from './config'
import { type UserModel } from '../types/UserModel'

export const api: Api = {
  get token (): string {
    return localStorage.getItem(AUTH_TOKEN_KAY) ?? ''
  },
  setToken (token: Token): void {
    localStorage.setItem(AUTH_TOKEN_KAY, token)
  },
  removeToken (): void {
    localStorage.removeItem(AUTH_TOKEN_KAY)
  },
  auth: {
    async signup (userInfo: signUpRequestData): Promise<AxiosResponse<Token>> {
      const { data } = await axios.post(`${AUTH_URL}/register`, userInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return data
    },
    async login (credentials: loginRequestData): Promise<AxiosResponse<Token>> {
      const { data } = await axios.post(`${AUTH_URL}/login`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })

      return data
    },
    async auth (): Promise<any> {
      return await axios.get(`${AUTH_URL}/auth`, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })
    },
    async logout (): Promise<any> {
      return await axios.get(`${AUTH_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })
    }
  },
  posts: {
    async fetch (): Promise<AxiosResponse<PostModel[]>> {
      const { data } = await axios.get(FEED_URL, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    },
    async getComments (): Promise<AxiosResponse<CommentModel[]>> {
      const { data } = await axios.get(`${FEED_URL}/comments`)

      return data
    },
    async getPostById (postId: string): Promise<AxiosResponse<PostModel>> {
      const { data } = await axios.get(`${FEED_URL}/${postId}`)

      return data
    }
  },
  profile: {
    async fetch (): Promise<AxiosResponse<UserModel>> {
      const { data } = await axios.get(`${AUTH_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    },
    async updateProfile (profileInfo: updateProfileRequestData): Promise<any> {
      const { data } = await axios.put(`${AUTH_URL}/profile`, profileInfo, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    },
    async resetPassword (body: newPasswordRequestData): Promise<AxiosResponse<Token>> {
      const { data } = await axios.post(`${AUTH_URL}/reset-password`, body, {
        headers: {
          Authorization: `Bearer ${api.token}`
        }
      })

      return data
    }
  }
}
