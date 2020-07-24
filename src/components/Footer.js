import React from 'react'
import {Container, Row} from 'react-bootstrap'

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          {/*<Col className="p-0" md={3} sm={12}>*/}
          {/*  Amir Fazleev*/}
          {/*</Col>*/}

          {/*<Col className="p-0 d-flex justify-content-end" md={3}>*/}
          {/*  This site made by Amir Fazleev.*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
