import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import headphones from '../assets/headphones.PNG';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

import NavRoutes from '../common/NavRoutes';

const ProductCard = () => {
    return (
        <Link to={NavRoutes.ProductDetail}>
          
                <Card className='border-0 shadow rounded mt-4'>
                    <CardBody>
                        <CardText>
                            <img src={headphones} alt='' className='rounded mx-auto d-block' />
                            <CardTitle tag='p'>Eletronics</CardTitle>
                            <Ratings />
                        </CardText>
                    </CardBody>
                </Card>
        
        </Link>
    );
};
export default ProductCard;
