import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { Calculate } from '../app/CartHandler/CartSlice';
import CartContainer from '../components/CartContainer';
const CartPage = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.cart.cartProducts);

    //getting all the products
    
    useEffect(() => {
        dispatch(Calculate(products));
    }, [products]);

    const totalPrice = useSelector((state) => state.cart.totalPrice);
    return (
        <div>
            <Container>
                <h1>Shopping Cart</h1>
                <hr />
            </Container>
            <Container>
                {products.map((product) => {
                    return <CartContainer product={product} />;
                })}
            </Container>
            <h2 className='text-center'>Total Bill ${totalPrice}</h2>
        </div>
    );
};
export default CartPage;
