import {Col, Container, Row} from 'react-bootstrap'

const Lang = ({title, visibleName, dotClass}) => (
  <Col>
    <Container>
      <div className="d-flex justify-content-center"><span className={dotClass} title={title}></span>
      </div>
      <div className="d-flex justify-content-center"><span>{visibleName}</span></div>
    </Container>
  </Col>
)

const Languages = () => (
  <section className="mt-4">
    <h4>Languages:</h4>
    <Row>
      <Lang title="Fluent English" visibleName="English" dotClass="dot" />
      <Lang title="Native Russian" visibleName="Russian" dotClass="dot" />
      <Lang title="Intermediate Belarusian" visibleName="Belarusian" dotClass="dot intermediate" />
      <Lang title="Pre-intermediate Ukrainian" visibleName="Ukrainian" dotClass="dot intermediate" />
      <Lang title="Elementary Japanese" visibleName="Japanese" dotClass="dot elementary" />
      <Lang title="Beginner Hungarian" visibleName="Hungarian" dotClass="dot beginner" />
    </Row>
  </section>
)

export default Languages