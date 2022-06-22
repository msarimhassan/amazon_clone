import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';

import { Link } from 'react-router-dom';
import NavRoutes from '../common/NavRoutes';
import { useTranslation } from 'react-i18next';
const CardContainer = ({id,image,name}) => {
  


    const { t } = useTranslation(['Products']);
    return (
        <Card className='rounded-3 shadow  mt-3'>
            <CardImg alt='Card image cap' src={image} top width='100%' height='auto' className='rounded' />
            <CardBody>
                <CardTitle tag='h5'>{t(name)}</CardTitle>
                {/* <CardSubtitle className='mb-2 text-muted' tag='h6'>
                  Card subtitle
              </CardSubtitle>
              <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
              </CardText> */}
                <Link
                    to={NavRoutes.ProductPage}
                    state={{id:id}}
                    style={{ textDecoration: 'none', cursor: 'pointer', color: 'primary' }}
                >
                    <Button color='danger'>{t('shopnow')}</Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default CardContainer;
