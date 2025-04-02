import Localisation from '@/components/Localisation'

const Translation = ({dict}) => {
  return (
    <section className="section translation" id="translation">
      <div>
        <h1>{dict.header}</h1>
        <div>
          <p>{dict.basic.p1}</p>
          <p>{dict.basic.p2}</p>
          <p>{dict.basic.p3}</p>
        </div>
        <div>
          <Localisation key={0} dict={dict.localisation.akfgfragments} />
          <Localisation key={1} dict={dict.localisation.tabby} />
        </div>
      </div>
    </section>
  )
}

export default Translation