import React from 'react'
import '../../styles/CartPage.css';
import { useSelector } from 'react-redux/es/exports';

import {Row,Col} from 'reactstrap';
export default function OrderBill() {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
      <div className='Bill-Box p-5'>
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
      </div>
  );
}
