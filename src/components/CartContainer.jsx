import React,{useState} from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';

import {Increment,Decrement,DeleteProduct} from '../app/CartHandler/CartSlice';

const  CartContainer=({product})=> {

   const dispatch = useDispatch();
    const [count, setCount] = useState(product.quantity);
   
const handleNegative=()=>{
    if(count>1)
    {

        setCount(count-1);
        dispatch(Decrement(product));
    }
}
const deleteProduct=()=>{
     dispatch(DeleteProduct(product));
}
  return (
      <div>
          <Container className='mt-5'>
              <Row>
                  <Col sm='3'>
                      <img src={product.image} style={{ width: '150px' }} alt='' />
                  </Col>
                  <Col sm='6'>
                      <h5>
                          TALK WORKS AirPods Case Cover with Keychain - Protective Hard Silicone
                          Skin for AirPods Keychain Case Clip Carabiner{' '}
                      </h5>
                      <span>{product.name}</span>
                      <br />
                      Quantity{' '}
                      <Button
                          onClick={() => {
                              handleNegative();
                          }}
                      >
                          -
                      </Button>{' '}
                      {count}{' '}
                      <Button
                          onClick={() => {
                              setCount(count+1)
                              dispatch(Increment(product));
                          }}
                      >
                          +
                      </Button>
                  </Col>
                  <Col sm='2'>
                      <h5>${product.price}</h5>
                  </Col>
                  <Col>
                  <Button onClick={deleteProduct}>Delete</Button>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}
export default CartContainer;
