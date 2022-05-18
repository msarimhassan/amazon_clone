import React from 'react'
import CardContainer from './CardContainer';
import { Container,Row,Col } from 'reactstrap';

 const CardHandler=()=> {
  return (
      <Container className='d-flex flex-wrap'>
          <Row >
              <Col>
                  <CardContainer />
              </Col>
              <Col>
                  <CardContainer />
              </Col>
              <Col>
                  <CardContainer />
              </Col>
              <Col>
                  <CardContainer />
              </Col>
              <Col>
                  <CardContainer />
              </Col>
              <Col>
                  <CardContainer />
              </Col>
          </Row>
      </Container>
  );
}

export default CardHandler;