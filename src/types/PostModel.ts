import { type CommentModel } from './CommentModel'
import { type UserInfo } from './UserModel'

export interface PostInfo {
  hash: string
}

export interface PostModel extends PostInfo {
  hash: string
  author: UserInfo
  created: number
  body: string
  comments: CommentModel[]
  likes: string[]
}
