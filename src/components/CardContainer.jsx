import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import electronics from '../assets/electronics.PNG';
import {Link} from 'react-router-dom';
import NavRoutes from '../common/NavRoutes';
import { useTranslation } from 'react-i18next';
const  CardContainer=()=> {

    const {t}=useTranslation(["Products"]);
  return (
    
          <Card className='border-0 shadow rounded mt-4'>
              <CardBody>
                  <CardTitle tag='h2'>{t("electronics")}</CardTitle>

                  <CardText >
                      <img src={electronics} alt='' className='rounded mx-auto d-block image-fluid' />
                  </CardText>
                  <Link to={NavRoutes.ProductPage}
                      
                      style={{ textDecoration: 'none', cursor: 'pointer', color: 'primary' }}
                  >
                      {t('shopnow')}
                  </Link>
              </CardBody>
          </Card>

  );
}

export default CardContainer;
