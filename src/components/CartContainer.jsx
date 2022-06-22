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
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col sm='3'>
                        <img src={product.imageUrl} style={{ width: '150px' }} alt='' />
                    </Col>
                    <Col sm='6'>
                        <h5>{t(product.name)}</h5>
                        <br />
                        Quantity{' '}
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
                    <Col sm='2'>
                        <h5>
                            {' '}
                            {t('price')} ${t(product.sellingPrice)}
                        </h5>
                    </Col>
                    <Col>
                        <Button onClick={deleteProduct}>{t('delete')}</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default CartContainer;
