// Core
import { render } from '@testing-library/react'

// Components
import { Comment } from '../index'

// Helpers
import { comment } from '../../../tests/fake-data'

describe('Comment component', () => {
  test('Comment structure should be received from props value', () => {
    const { container } = render(<Comment comment = { comment } />)
    expect(container).toMatchSnapshot()
  })
})
