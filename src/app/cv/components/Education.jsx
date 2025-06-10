import {BoxArrowUpRight} from 'react-bootstrap-icons'

const EducationEntry = ({title, name, url, time, desc, className}) => (
  <div className={className}>
    <h5>{title}</h5>
    <h6>{name}<a href={url} target="_blank"><BoxArrowUpRight className="ms-1" /></a></h6>
    <span>{time}</span><br/>
    <p>{desc}</p>
  </div>
)

const Education = () => (
  <section id="school" className="mt-4">
    <h4>Education:</h4>
    <EducationEntry
      title="M.Sc. in Communication Networks and Systems Development and Maintenance"
      name="ITMO University"
      url="https://en.itmo.ru/"
      time="Sep 2019 – Jun 2021"
      desc="Thesis: ‘Increasing a Metro's LTE Network's Throughput by Implementation of Broadcast Modes for Mission Critical Services’"
      className=""
    />
    <EducationEntry
      title="B.Sc. in Systems of Radio Access and Radio Communications"
      name="ITMO University"
      url="https://en.itmo.ru/"
      time="Sep 2015 – Jun 2019"
      desc="Thesis: ‘Transferring Voice Data in Metro's Dispatch Networks Using LTE Technology System Development’"
      className="mt-3"
    />
  </section>
)

export default Education