import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import headphones from '../assets/headphones.PNG';
import Ratings from './Ratings';

const ProductCard = () => {
    return (
        <div style={{ width: '300px' }}>
            <Card className='border-0 shadow rounded mt-4'>
                <CardBody>
                    <CardText>
                        <img src={headphones} alt='' />
                        <CardTitle tag='p'>Eletronics</CardTitle>
                        <Ratings />
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};
export default ProductCard;
