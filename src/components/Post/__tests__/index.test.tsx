// Core
import { render, fireEvent, type RenderResult } from '@testing-library/react'

// Components
import { Post } from '../index'

// Store
import Store from '../../../store'

// Helpers
import { Wrapper } from '../../../tests/helpers'
import { posts } from '../../../tests/fake-data'

describe('Post component', () => {
  let renderedComponent: RenderResult
  let commentButton: HTMLElement | null

  beforeEach(() => {
    renderedComponent = render(<Wrapper><Post post={posts[0]} /></Wrapper>)
    commentButton = renderedComponent.container.querySelector('.comment')
  })

  test('activePostId set after click', () => {
    if (!commentButton) {
      return
    }

    fireEvent.click(commentButton)

    expect(Store.getState().feed.activePostId).toEqual(posts[0].hash)
  })

  test('comment form visible after click', () => {
    if (!commentButton) {
      return
    }

    fireEvent.click(commentButton)

    const commentForm = renderedComponent.container.querySelector('.commentForm')
    expect(commentForm).toBeInTheDocument()
  })
})
