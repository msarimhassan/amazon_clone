import React from 'react'
import {Row,Col,Button} from 'reactstrap';
import NavRoutes from '../../common/NavRoutes';
import { useNavigate } from 'react-router-dom';


export default function Bill({totalPrice}) {
  let navigate = useNavigate();
   const handleOrder = () => {
       navigate(NavRoutes.Order);
   };
  return (
      <>
          <h4>Order Details</h4>
          <hr />
          <Row>
              <Col sm={6}>SubTotal</Col>
              <Col sm={6} style={{ textAlign: 'right' }}>
                  Rs{totalPrice}
              </Col>
          </Row>
          <hr />
          <Row>
              <Col sm={6}>Total</Col>
              <Col sm={6} style={{ textAlign: 'right' }}>
                  Rs{totalPrice}
              </Col>
          </Row>
          <div className='text-center mt-5'>
              <Button
                  onClick={() => {
                      handleOrder();
                  }}
                  className='amazon-btn'
              >
                  Proceed to checkout
              </Button>
          </div>
      </>
  );
}
