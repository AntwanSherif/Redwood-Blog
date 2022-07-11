import { render, screen, within } from '@redwoodjs/testing/web'

import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'First post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  createdAt: new Date().toISOString(),
}

describe('Article', () => {
  it('renders a blog post with full body', () => {
    render(<Article article={ARTICLE} />)

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
  })

  describe('post body truncate functionality', () => {
    it('renders a summary of a blog post', () => {
      render(<Article article={ARTICLE} summary />)

      expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
      expect(
        screen.getByText(
          'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
        )
      ).toBeInTheDocument()
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
