import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import electronics from '../assets/electronics.PNG';
import {Link} from 'react-router-dom';
import NavRoutes from '../common/NavRoutes';
const  CardContainer=()=> {
  return (
    
          <Card className='border-0 shadow rounded mt-4'>
              <CardBody>
                  <CardTitle tag='h2'>Eletronics</CardTitle>

                  <CardText >
                      <img src={electronics} alt='' className='rounded mx-auto d-block' />
                  </CardText>
                  <Link to={NavRoutes.ProductPage}
                      
                      style={{ textDecoration: 'none', cursor: 'pointer', color: 'primary' }}
                  >
                      Shop now
                  </Link>
              </CardBody>
          </Card>

  );
}

export default CardContainer;
