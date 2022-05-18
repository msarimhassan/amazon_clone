import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import electronics from '../assets/electronics.PNG';


const  CardContainer=()=> {
  return (
      <div style={{ width: '300px' }}>
          <Card className='border-0 shadow rounded mt-4'>
              <CardBody>
                  <CardTitle tag='h2'>Eletronics</CardTitle>

                  <CardText >
                      <img src={electronics} alt='' classNamerounded mx-auto d-block />
                  </CardText>
                  <a
                      href='#'
                      style={{ textDecoration: 'none', cursor: 'pointer', color: 'primary' }}
                  >
                      Shop now
                  </a>
              </CardBody>
          </Card>
      </div>
  );
}

export default CardContainer;
