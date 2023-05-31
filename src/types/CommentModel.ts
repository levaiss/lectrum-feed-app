import { type UserInfo } from './UserModel'
import { type PostInfo } from './PostModel'

export interface CommentModel {
  hash: string
  author: UserInfo
  created: number
  body: string
  post: PostInfo
}
