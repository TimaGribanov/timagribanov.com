import Language from './Language'
import Link from 'next/link'

const Header = ({dict}) => {
  return (
    <header className="section">
      <div>
        <div className="name-div">
          <span className="name">tima gribanov</span>
        </div>
        <nav>
          <Link href="/#about-me">{dict.bio.header}</Link>
          <Link href="/#projects">{dict.projects.header}</Link>
          <Link href="/#translation">{dict.translation.link_header}</Link>
          <Link href="/#links">{dict.links}</Link>
          <Language/>
        </nav>
      </div>

    </header>
  )
}

export default Header