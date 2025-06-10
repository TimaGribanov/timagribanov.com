import {BoxArrowUpRight} from 'react-bootstrap-icons'

const Project = ({title, url, tech, desc, className}) => (
  <div className={className}>
    <h5>{title}<a href={url} target="_blank"><BoxArrowUpRight className="ms-1"/></a></h5>
    <span>{tech}</span>
    <p>{desc}</p>
  </div>
)

const Projects = () => (
  <section id="projects">
    <h4>Projects:</h4>
    <Project
      title="akfgfragments site's WP theme"
      url="https://github.com/TimaGribanov/akfgfragments_theme"
      tech="PHP, HTML, CSS, Bootstrap, WordPress"
      desc="A simple theme for a WordPress-based site for akfgfragments project."
      className=""
    />
    <Project
      title="solfa20.akfgfragments.com"
      url="https://github.com/TimaGribanov/solfa20.akfgfragments.com"
      tech="Next.js, TypeScript, Bootstrap, MongoDB, GSAP"
      desc="A one-page site built with Next.js to celebrate the anniversary of an album. it includes a MongoDB database to store the fans' messages."
      className="mt-3"
    />
    <Project
      title="Linktree for akfgfragments.com"
      url="https://github.com/TimaGribanov/links.akfgfragments.com"
      tech="Next.js, TypeScript, Bootstrap"
      desc="A little Next.js project implementing a linktree for my site akfgfragments.com. Includes metadata builder."
      className="mt-3"
    />
    <Project
      title="Ajikan Database"
      url="https://github.com/TimaGribanov/ajikan-database"
      tech="React.js, Node.js, CSS"
      desc="This is a little project that allows anyone to get info about records that a certain song of a
        band Asian Kung-Fu Generation is on. The project contains of backend (MariaDB database and Node.js/express server) and frontend
        (React.js, CSS)."
      className="mt-3"
    />
    <Project
      title="SMS Converter"
      url="https://github.com/TimaGribanov/sms-converter"
      tech="HTML, CSS, Bootstrap, JavaScript"
      desc="A JS-based tool to convert SM bodies to and from human-readable form. Allows to convert sms bodies from GSM7, UCS2 and 8-bit to text, vice versa."
      className="mt-3"
    />
    <Project
      title="Ajikan Worldwide Project"
      url="https://github.com/TimaGribanov/ajikan-worldwide-project"
      tech="JavaScript, HTML, CSS, Bootstrap"
      desc="A one-page site dedicated to the song cover project of one particular music band."
      className="mt-3"
    />
  </section>
)

export default Projects