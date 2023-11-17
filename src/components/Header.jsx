import Language from './Language'
import Socials from './Socials'

const Header = ({ handleLangs }) => {
  return (
    <header className='row d-flex justify-content-between'>
      <div className='col-8 nameDiv'>
        <span className='name'>tima gribanov</span>
      </div>
      <div className='col'>
        <div className='row d-flex justify-content-end h-100'>
          <Socials />
          <Language handleLangs={handleLangs} />
        </div>
      </div>
    </header>
  )
}

export default Header