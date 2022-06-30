import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MasterCard from '../../assets/mastercard.png';
import { Icons } from '../../common';

const UserCard = ({card}) => {
     const { FC } = Icons;
  return (
      <>
          <Container
              className='border'
              style={{
                  backgroundColor: '#31332F',
                  height: '200px',
                  borderRadius: '20px',
                  color: 'white',
                  maxWidth: '400px',
              }}
          >
              <Row className='pt-3'>
                  <Col>
                      <FC.FcMoneyTransfer size={30} />
                  </Col>
                  <Col className='pt-1' style={{paddingLeft:'190px'}}>
                      <h6>
                          {card.firstName}
                          {card.lastName}
                      </h6>
                  </Col>
              </Row>
              <Row className='mt-3 ms-2'>
                  <h6>{card.cardNumber}</h6>
              </Row>
              <Row className='mt-1 ms-2'>
                  <h6>{card.expiryDate}</h6>
              </Row>
              <Row>
                  <div className='float-end'>
                      <img src={MasterCard} width='50px' />
                  </div>
              </Row>
          </Container>
      </>
  );
    
}

export default UserCard;