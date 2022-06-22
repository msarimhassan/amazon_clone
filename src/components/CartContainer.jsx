import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Increment, Decrement, DeleteProduct } from '../app/CartHandler/CartSlice';

const CartContainer = ({ product }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation(['Products']);

    const deleteProduct = () => {
        dispatch(DeleteProduct(product));
    };
    return (
        <>
            <Row className='mt-4'>
                <Col sm={2} className='d-flex align-items-center'>
                    <Button onClick={deleteProduct}>{t('delete')}</Button>
                </Col>
                <Col sm={4} className='d-flex align-items-center'>
                    <img src={product.imageUrl} style={{ width: '150px' }} alt='' />
                </Col>
                <Col sm={2} className='d-flex align-items-center'>
                    <h5>{t(product.name)}</h5>
                </Col>
                <Col sm={2} className='d-flex align-items-center'>
                    <h5>${t(product.sellingPrice)}</h5>
                </Col>
                <Col sm={2} className='d-flex align-items-center'>
                    <Button
                        onClick={() => {
                            dispatch(Decrement(product));
                        }}
                    >
                        -
                    </Button>{' '}
                    {product.quantity}{' '}
                    <Button
                        onClick={() => {
                            dispatch(Increment(product));
                        }}
                    >
                        +
                    </Button>
                </Col>
            </Row>
        </>
    );
};
export default CartContainer;
