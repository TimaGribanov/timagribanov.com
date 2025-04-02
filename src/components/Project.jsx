const Project = ({dict}) => {
  return (
    <div className="project-block">
      <h2><a href={dict.url}>{dict.title}</a></h2>
      <p><a href={dict.github} className="github-link">github</a></p>
      <p>{dict.description}</p>
      <p><em>{dict.technologies}</em></p>
    </div>
  )
}

export default Project