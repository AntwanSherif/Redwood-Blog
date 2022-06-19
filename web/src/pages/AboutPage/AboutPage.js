import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h1> Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          suscipit veritatis deserunt quos natus tempora ipsa aliquam?
          Exercitationem esse ea consectetur. Fugiat ducimus aperiam, nam
          nesciunt beatae repudiandae. Officiis, corporis.
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </>
  )
}

export default AboutPage
