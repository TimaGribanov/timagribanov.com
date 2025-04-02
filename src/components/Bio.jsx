const Bio = ({dict}) => {
  return (
    <section className="section" id="about-me">
      <div>
        <h1>{dict.header}</h1>
        <p>{dict.p1}</p>
        <p>{dict.p2}</p>
        <p>{dict.p3}</p>
      </div>
    </section>
  )
}

export default Bio