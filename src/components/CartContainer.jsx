import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import airpods from '../assets/airpods.jpg';

const  CartContainer=()=> {
  return (
      <div>
          <Container>
              <h1>Shopping Cart</h1>
              <span>Empty Cart </span>
              <hr />
              <Row>
                  <Col sm='3'>
                      <img src={airpods} style={{ width: '150px' }} alt='' />
                  </Col>
                  <Col sm='6'>
                      <h5>
                          TALK WORKS AirPods Case Cover with Keychain - Protective Hard Silicone
                          Skin for AirPods Keychain Case Clip Carabiner{' '}
                      </h5>
                      inStock
                      <br />
                      Quantity {' '}
                      <Button>-</Button> 0 <Button>+</Button>
                  </Col>
                  <Col sm='2'>
                      <h5>$9.88</h5>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}
export default CartContainer;
