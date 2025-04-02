import Project from './Project.jsx'

const Projects = ({dict}) => {
  return (
    <section className="section projects" id="projects">
      <div>
        <h1>{dict.header}</h1>
        <div><p>{dict.basic}</p></div>
        <div>
          <Project key={0} dict={dict.akfgfragments}/>
          <Project key={1} dict={dict.links}/>
          <Project key={2} dict={dict.solfa20}/>
          <Project key={3} dict={dict.ajikanDb}/>
          <Project key={4} dict={dict.sms}/>
          <Project key={5} dict={dict.awp}/>
        </div>
      </div>
    </section>
  )
}

export default Projects