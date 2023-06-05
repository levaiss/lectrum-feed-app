// Core
import { type RenderResult, render, fireEvent } from '@testing-library/react'

// Components
import { Post } from '../index'

// Store
import Store from '../../../store'

// Helpers
import { Wrapper } from '../../../tests/helpers'
import { posts } from '../../../tests/fake-data'

describe('Post component', () => {
  let postComponent: RenderResult
  let commentButton: HTMLElement | null

  beforeEach(() => {
    postComponent = render(<Wrapper><Post post={posts[0]} /></Wrapper>)
    commentButton = postComponent.container.querySelector('.comment')
  })

  test('activePostId set after click', () => {
    if (!commentButton) {
      return
    }

    fireEvent.click(commentButton)

    expect(Store.getState().feed.activePostId).toEqual(posts[0].hash)
  })

  test('comment form visible after click', async () => {
    if (!commentButton) {
      return
    }

    postComponent.rerender(<Wrapper><Post post={posts[0]} /></Wrapper>)

    const commentFormInput = postComponent.getByPlaceholderText('Коментарій...')
    expect(commentFormInput).toBeInTheDocument()
  })
})
