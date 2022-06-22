import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import NavRoutes from '../common/NavRoutes';
import '../styles/Form.css';
import { AddToCart } from '../app/CartHandler/CartSlice';
import { set } from 'react-hook-form';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.cartProducts);

    const handleProduct = (product) => {
        dispatch(AddToCart(product));
    };
    const { t } = useTranslation(['Products']);
    return (
        <Card>
            <Link
                to={NavRoutes.ProductDetail}
                state={{ id: product._id }}
                style={{ textDecoration: 'none' }}
            >
                <CardBody>
                    <img
                        src={product.imageUrl}
                        style={{
                            width: '40vh',
                            height: '40vh',
                        }}
                        alt='Product-image'
                        className='rounded mx-auto d-block'
                    />
                    <CardText>
                        <CardTitle tag='h3' className='text-black mt-2'>
                            {t(product.name)}
                        </CardTitle>
                        <Ratings />
                        <div className='d-flex justify-content-between'>
                            <CardText tag='h5' className='text-black'>
                                {t('price')}
                                {' : '}
                            </CardText>
                            <CardText tag='h5' style={{ color: '#c45500' }}>
                                Rs{t(product.sellingPrice)}
                            </CardText>
                        </div>
                    </CardText>
                </CardBody>
            </Link>
            <Button
                className='btn-color'
                disabled={products.some((item) => item._id == product._id)}
                onClick={() => handleProduct(product)}
            >
                {t('addtocart')}
            </Button>
        </Card>
    );
};
export default ProductCard;
