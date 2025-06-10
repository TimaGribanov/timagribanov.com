import Image from 'next/image'
import {Col, Container, Row, NavbarCollapse, NavItem, NavLink, Nav, Navbar} from 'react-bootstrap'
import {EnvelopeFill, GeoAltFill, Github, Linkedin} from 'react-bootstrap-icons'

const Header = () => {
  return (
    <Container as="header">
      <Row id="header-desc" className="m-0 p-2">
        <Col id="header-desc-block" className="ms-5 my-auto">
          <h1 id="header-name">Timofei Gribanov</h1>
          <p className="header-description">Test Automation Engineer</p>
          <p className="header-description">Web Development Enthusiast</p>
        </Col>
        <Col id="header-photo" className="my-auto">
          <Image
            src="/photo_2.jpg"
            alt="My photo"
            width={150}
            height={150}
            className="img-thumbnail float-end rounded-circle me-5"
          />
        </Col>
      </Row>

      <Navbar className="w-100" id="menu">
        <Container fluid>
          <NavbarCollapse>
            <Nav className="navbar-centre">
              <NavItem>
                <NavLink as="span" style={{color: 'white'}}>
                  <GeoAltFill className="me-1"/>Budapest, Hungary
                </NavLink>
              </NavItem>
              <NavItem><NavLink href="mailto:t.gribanow@gmail.com" target="_blank">
                <EnvelopeFill className="me-1"/>t.gribanow@gmail.com
              </NavLink></NavItem>
              <NavItem><NavLink href="https://www.linkedin.com/in/timagribanov/" target="_blank">
                <Linkedin className="me-1"/>linkedin.com/in/timagribanov
              </NavLink></NavItem>
              <NavItem><NavLink href="https://github.com/TimaGribanov" target="_blank">
                <Github className="me-1"/>github.com/TimaGribanov
              </NavLink></NavItem>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header