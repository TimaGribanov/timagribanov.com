const ProjectsMenuItem = ({ type, name, projMenuActive, handleProjMenuActive, handleProjType }) => {
  const handleClick = type => {
    handleProjMenuActive(type)
    handleProjType(type)
  }

  return (
    <div
      className={
        projMenuActive[0] === type && projMenuActive[1]
          ? 'projMenuItem ps-3 d-flex align-items-center projMenuItemActive'
          : 'projMenuItem ps-3 d-flex align-items-center'
      }
      onClick={() => handleClick(type)}>
      {name}
    </div>
  )
}

export default ProjectsMenuItem