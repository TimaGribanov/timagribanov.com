const Links = ({dict}) => {
  return (
    <section className="section" id="links">
      <div className="links">
        <h1>{dict.links}</h1>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/timagribanov/' target='_blank'>in/timagribanov</a></p>
        <p>Github: <a href='https://github.com/TimaGribanov' target='_blank'>TimaGribanov</a></p>
        <p><a href='https://timagribanov.com/cv/' target='_blank'>{dict.cv}</a></p>
      </div>
    </section>
  )
}

export default Links