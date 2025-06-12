import Work from '@/app/cv/components/Work'
import Education from '@/app/cv/components/Education'
import {Col, Container, Row} from 'react-bootstrap'
import Projects from '@/app/cv/components/Projects'
import Certificates from '@/app/cv/components/Certificates'
import Languages from '@/app/cv/components/Languages'

const skills = [
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React.js',
  'Node.js',
  'Full Stack',
  'HTML',
  'CSS',
  'Bootstrap',
  'Java',
  'TestNG',
  'Testing',
  'Software Testing',
  'Testing Automation',
  'ISTQB Foundation Certification',
  'PHP',
  'Telecommunications',
  '2G',
  '3G',
  'LTE',
  'MAP',
  'SMS',
  'GSM',
  'Diameter',
  'SMPP',
  'Linux',
  'Ansible',
  'Perl',
  'Bash',
  'Shell Scripting',
  'Data Analysis',
  'MySQL',
  'SQL',
  'MongoDB',
  'Databases'
]

const Skills = () => {
  let keyIndex = 0

  return (
    <div>
      {skills.map(s => {
        keyIndex++
        return <div key={keyIndex} className="d-inline-block p-1 skill">{s}</div>
      })}
    </div>
  )
}

const Main = () => (
  <Container as="main" className="px-4 py-2">
    <Row>
      <Col>
        <Work/>
        <Education/>
      </Col>
      <Col>
        <Projects/>
        <Certificates/>
        <Languages/>
      </Col>
    </Row>
    <Row as="section" id="skills">
      <h4>Skills:</h4>
      <Skills/>
    </Row>
  </Container>
)

export default Main