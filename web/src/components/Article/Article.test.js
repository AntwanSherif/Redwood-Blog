import { render, screen, within, waitFor } from '@redwoodjs/testing/web'

import { standard } from 'src/components/CommentsCell/CommentsCell.mock'

import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'First post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  createdAt: new Date().toISOString(),
}

describe('Article', () => {
  describe('displaying the full blog post', () => {
    it('renders a blog post with full body', () => {
      render(<Article article={ARTICLE} />)

      expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
      expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
    })

    it('renders comments when displaying a full blog post', async () => {
      const comment = standard().comments[0]
      render(<Article article={ARTICLE} />)

      await waitFor(() =>
        expect(screen.getByText(comment.body)).toBeInTheDocument()
      )
    })
  })

  describe('displaying blog post summary', () => {
    it('renders a summary of a blog post', () => {
      render(<Article article={ARTICLE} summary />)

      expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
      expect(
        screen.getByText(
          'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
        )
      ).toBeInTheDocument()
    })

    it('does not render comments when displaying a summary', async () => {
      const comment = standard().comments[0]
      render(<Article article={ARTICLE} summary />)

      await waitFor(() =>
        expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
      )
    })

    it('renders full body if shorter than truncation length', () => {
      const SHORT_BODY = 'short'
      render(<Article article={{ ...ARTICLE, body: SHORT_BODY }} summary />)

      const matchedBody = screen.getByText(SHORT_BODY, { exact: true })
      const ellipsis = within(matchedBody).queryByText('...', { exact: false })

      expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
      expect(matchedBody).toBeInTheDocument()
      expect(ellipsis).not.toBeInTheDocument()
    })
  })
})
