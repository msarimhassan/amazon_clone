import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import NavRoutes from '../common/NavRoutes';
import '../styles/Form.css';
import { AddToCart } from '../app/CartHandler/CartSlice';
import { Icons } from '../common';
import '../styles/Card.css';
const ProductCard = ({ product }) => {
    console.log(product);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.cartProducts);
    const { AI } = Icons;

    const handleProduct = (product) => {
        console.log(product);
        dispatch(AddToCart(product));
    };
    const { t } = useTranslation(['Products']);
    return (
        <Card className='card-with-shadow'>
            <Link
                to={NavRoutes.ProductDetail}
                state={{ id: product?._id, data: product }}
                style={{ textDecoration: 'none' }}
            >
                <CardBody>
                    <img
                        src={product?.imageUrl}
                        alt='Product-image'
                        className='rounded mx-auto d-block product-card-image'
                    />
                    <CardText>
                        <CardTitle tag='h3' className='text-black mt-2'>
                            {product?.name}
                        </CardTitle>
                        <Ratings />
                        <div className='d-flex justify-content-between'>
                            <CardText tag='h5' className='text-black'>
                                {t('price')}
                                {' : '}
                            </CardText>
                            <CardText tag='h5' style={{ color: '#c45500' }}>
                                Rs{product?.sellingPrice}
                            </CardText>
                        </div>
                    </CardText>
                </CardBody>
            </Link>
            {product?.quantity > 0 ? (
                <Button
                    className=' product-button btn-color'
                    disabled={products?.some((item) => item._id == product?._id)}
                    onClick={() => handleProduct(product)}
                >
                    {products?.some((item) => item._id == product?._id) ? (
                        'Added in Cart'
                    ) : (
                        <>
                            {' '}
                            {t('addtocart')} <AI.AiOutlineShoppingCart size={28} />
                        </>
                    )}
                </Button>
            ) : (
                <div className='text-center' style={{ backgroundColor: 'red', color: 'white' }}>
                    <h5 className='mt-1'>Not in stock</h5>
                </div>
            )}
        </Card>
    );
};
export default ProductCard;
