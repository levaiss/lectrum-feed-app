// Core
import Enzyme, { shallow, type ShallowWrapper } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import type { CommentModel } from '../../../types/CommentModel'

// Components
import { Comment } from '../index'

Enzyme.configure({ adapter: new Adapter() })

const comment: CommentModel = {
  hash: 'testCommentHash',
  author: {
    name: 'John Dou',
    avatar: 'avatar.jpg'
  },
  created: 1615772222,
  body: 'Test comment from John Dou',
  post: {
    hash: 'testPostHash'
  }
}

const initCommentComponent = (comment: CommentModel): { wrapper: ShallowWrapper } => {
  const wrapper: ShallowWrapper = shallow(<Comment comment = { comment } />)

  return { wrapper }
}

describe('Comment component', () => {
  test('Comment structure should be received from props value', () => {
    const { wrapper } = initCommentComponent(comment)
    const commentEl: string = wrapper.html()
    expect(commentEl).toMatchSnapshot()
  })
})
