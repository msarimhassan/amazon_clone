import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import electronics from '../assets/Electronics.png';
import { Link } from 'react-router-dom';
import NavRoutes from '../common/NavRoutes';
import { useTranslation } from 'react-i18next';
const CardContainer = () => {
    const { t } = useTranslation(['Products']);
    return (
        <Card className='rounded-3 shadow  mt-3'>
            <CardImg alt='Card image cap' src={electronics} top width='100%' className='rounded' />
            <CardBody>
                <CardTitle tag='h5'>{t('electronics')}</CardTitle>
                {/* <CardSubtitle className='mb-2 text-muted' tag='h6'>
                  Card subtitle
              </CardSubtitle>
              <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
              </CardText> */}
                <Link
                    to={NavRoutes.ProductPage}
                    style={{ textDecoration: 'none', cursor: 'pointer', color: 'primary' }}
                >
                    <Button color='danger'>{t('shopnow')}</Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default CardContainer;
