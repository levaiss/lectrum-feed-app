import { type PostModel } from '../types/PostModel'

export const posts: PostModel[] = [
  {
    hash: 'hashPost1',
    author: {
      name: 'Author Post1',
      avatar: 'avatar.jpg'
    },
    created: 1615772222,
    body: 'Post 1 body',
    comments: [],
    likes: []
  },
  {
    hash: 'hashPost2',
    author: {
      name: 'Author Post2',
      avatar: 'avatar.jpg'
    },
    created: 1615772222,
    body: 'Post 2 body',
    comments: [],
    likes: []
  },
  {
    hash: 'hashPost3',
    author: {
      name: 'Author Post3',
      avatar: 'avatar.jpg'
    },
    created: 1615772222,
    body: 'Post 3 body',
    comments: [],
    likes: []
  }
]
