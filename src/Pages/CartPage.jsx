// import React, { useEffect } from 'react';
// import { Container } from 'reactstrap';


// import { Calculate } from '../app/CartHandler/CartSlice';
// import CartContainer from '../components/CartContainer';
// const CartPage = () => {
//     const dispatch = useDispatch();



//     //getting all the products

//     useEffect(() => {
//         dispatch(Calculate(products));
//     }, [products]);

//     const totalPrice = useSelector((state) => state.cart.totalPrice);
//     return (
//         <div>
//             <Container>
//                 <h1>Shopping Cart</h1>
//                 <hr />
//             </Container>
//             <Container>
//
//             </Container>
//             <h2 className='text-center'>Total Bill ${totalPrice}</h2>
//         </div>
//     );
// };
// export default CartPage;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CartContainer from '../components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
export default function CartPage() {
    const products = useSelector((state) => state.cart.cartProducts);
    return (
        <>
            <Container >
                <Row>
                    <Col sm={12} lg={7} >
                        <h4>Shopping Cart</h4>
                        <hr />
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={4}></Col>
                            <Col sm={2}>Product</Col>
                            <Col sm={2}>Price</Col>
                            <Col sm={2}>Quantity</Col>
                        </Row>
                        <hr />
                        {products.map((product, key) => {
                            return <CartContainer key={key} product={product}  />;
                        })}
                    </Col>
                    <Col sm={12} lg={5} className='border'>
                        2
                    </Col>
                </Row>
            </Container>
        </>
    );
}
