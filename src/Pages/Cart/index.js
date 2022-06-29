import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CartContainer from '../../components/CartContainer';
import { AddToCart, Calculate, SetCart } from '../../app/CartHandler/CartSlice';
import '../../styles/CartPage.css';
import { ACNetwork, Urls, config } from '../../config';

import Bill from './Bill';
import i18next from 'i18next';
export default function CartPage() {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.cart.cartProducts);

    useEffect(() => {
        changeNames(products);
    }, []);

    useEffect(() => {
        dispatch(Calculate(products));
    }, [products]);

    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const changeNames = async (products) => {
        const newProducts = products?.map((product) => {
            return {
                _id: product._id,
            };
        });

        let obj = {
            products: newProducts,
        };
        const response = await ACNetwork.post(
            Urls.changeName(i18next.language),

            obj,
            (
                await config()
            ).headers
        );
        console.log(response.data);
        dispatch(SetCart(response.data.products));
    };

    const { t } = useTranslation(['Cart']);
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} lg={8} className='p-5'>
                        <h4>{t('shoppingcart')}</h4>
                        <hr />
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={2}>{t('product')}</Col>
                            <Col sm={2}>{t('price')}</Col>
                            <Col sm={2}>{t('quantity')}</Col>
                            <Col sm={2}></Col>
                        </Row>
                        <hr />
                        {products?.map((product, key) => {
                            return <CartContainer key={key} product={product} />;
                        })}
                    </Col>
                    <Col sm={12} lg={4} className='p-5 Bill-Box'>
                        <Bill totalPrice={totalPrice} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
