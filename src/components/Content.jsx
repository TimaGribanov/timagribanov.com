import Bio from './Bio'
import Projects from './Projects'
import Links from './Links'

const Content = ({ handleProjMenuActive, handleProjType, projMenuActive, projType, contentType }) => {
  switch (contentType) {
    case 'bio':
      return <div className='mainContent w-100'><Bio /></div>
    case 'proj':
      return <div className='mainContent w-100'>
        <Projects
          handleProjMenuActive={handleProjMenuActive}
          handleProjType={handleProjType}
          projMenuActive={projMenuActive}
          projType={projType}
        />
      </div>
    case 'links':
      return <div className='mainContent w-100'><Links /></div>
    default:
      return <div className='mainContent w-100'><Bio /></div>
  }
}

export default Content