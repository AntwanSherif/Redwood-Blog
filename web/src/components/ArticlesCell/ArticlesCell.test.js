import { render, screen } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ArticlesCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    const articles = standard().articles
    render(<Success articles={articles} />)

    expect(screen.getByText(articles[0].title)).toBeInTheDocument()
    expect(screen.getByText(articles[0].body)).toBeInTheDocument()
    expect(screen.getByText(articles[1].title)).toBeInTheDocument()
    expect(screen.getByText(articles[1].body)).toBeInTheDocument()
  })
})
