import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Redwood Blog</h1>
      <p>Welcome to the blog</p>
    </>
  )
}

export default HomePage
