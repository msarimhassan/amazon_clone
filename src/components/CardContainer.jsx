import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';

import { Link } from 'react-router-dom';
import NavRoutes from '../common/NavRoutes';
import { useTranslation } from 'react-i18next';

const CardContainer = ({ id, image, name }) => {
    const { t } = useTranslation(['Products']);
    return (
        <Card className='rounded-3 mt-3'>
            <CardImg
                alt='Card image cap'
                src={image}
                top
                style={{ width: '300px', height: '300px' }}
                className='rounded'
            />
            <CardBody>
                <CardTitle tag='h5'>{t(name)}</CardTitle>
                <Link
                    to={NavRoutes.ProductPage}
                    state={{ id: id ,name}}
                    style={{ textDecoration: 'none', cursor: 'pointer', color: 'primary' }}
                >
                    <Button color='danger'>{t('shopnow')}</Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default CardContainer;
