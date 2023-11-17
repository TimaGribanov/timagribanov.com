import ProjectContent from './ProjectContent'
import ProjectsMenuItem from './ProjectsMenuItem'

const Projects = ({ handleProjMenuActive, handleProjType, projMenuActive, projType }) => {
  return (
    <div className='row'>
      <div id='projMenu' className='col-3'>
        <nav className='nav flex-column'>
          <ProjectsMenuItem
            type='sms'
            name='SMS Converter'
            projMenuActive={projMenuActive}
            handleProjMenuActive={handleProjMenuActive}
            handleProjType={handleProjType}
          />
          <ProjectsMenuItem
            type='akfgfragments'
            name='akfgfragments.com'
            projMenuActive={projMenuActive}
            handleProjMenuActive={handleProjMenuActive}
            handleProjType={handleProjType}
          />
          <ProjectsMenuItem
            type='awp'
            name='Ajikan Worldwide Project'
            projMenuActive={projMenuActive}
            handleProjMenuActive={handleProjMenuActive}
            handleProjType={handleProjType}
          />
          <ProjectsMenuItem
            type='akgDb'
            name='Ajikan Database'
            projMenuActive={projMenuActive}
            handleProjMenuActive={handleProjMenuActive}
            handleProjType={handleProjType}
          />
        </nav>
      </div>
      <div id='projContent' className='col'>
        <ProjectContent type={projType} />
      </div>
    </div>
  )
}

export default Projects