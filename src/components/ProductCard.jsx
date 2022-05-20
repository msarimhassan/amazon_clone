import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import headphones from '../assets/headphones.PNG';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavRoutes from '../common/NavRoutes';
import '../styles/Form.css'
import { AddToCart } from '../app/CartHandler/CartSlice';


const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const handleProduct=(product)=>{
          dispatch(AddToCart(product));
    }
    return (
       
          
                <Card className='border-0 shadow rounded mt-4'>
                     <Link to={NavRoutes.ProductDetail}>
                    <CardBody>
                        <CardText>
                            <img src={product.image} width='200px' height='300px'  alt='' className='rounded mx-auto d-block' />
                            <CardTitle tag='p'>{product.name}</CardTitle>
                            <Ratings />
                           Price{product.price}
                        </CardText>
                    </CardBody>
                    </Link>
                    <Button className='btn-color' onClick={()=>handleProduct(product)} >Add to Cart</Button>
                </Card>
        
       
    );
};
export default ProductCard;
