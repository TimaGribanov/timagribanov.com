const Localisation = ({dict}) => (
  <div className="localisation-block">
    <h2>{dict.title}</h2>
    <p><a href={dict.url} className="github-link">link</a></p>
    <p>{dict.description}</p>
  </div>
)

export default Localisation