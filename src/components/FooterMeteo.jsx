import { Col, Row, Container } from "react-bootstrap";


const FooterMeteo = () => {
  return (
    <Container fluid>

      <footer className="bg-light rounded p-2">
        <Row>
          <Col xs={12} md={6}>
            <h5>Cronologia..</h5>

            <Row>
              <Col xs={12} lg={4}>
                <p>Roma</p>
                <p>Trevi</p>
                <p>Sardegna</p>
              </Col>

              <Col xs={12} lg={6}>
                <p>Verona</p>
                <p>Puglia</p>
                <p>Calabria</p>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} lg={4}>
                <p>Vico del Gargano</p>
                <p>Bologna</p>
                <p>Perugia</p>
              </Col>

              <Col xs={12} lg={6}>
                <br />
                <p>Venezia</p>
                <p>Milano</p>
                <p>Peschici</p>
              </Col>
            </Row>
          </Col>
        </Row>

      </footer>
    </Container>
  );
};

export default FooterMeteo;
