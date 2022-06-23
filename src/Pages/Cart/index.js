// import React, { useEffect } from 'react';
// import { Container } from 'reactstrap';



// import CartContainer from '../components/CartContainer';
// const CartPage = () => {




//     //getting all the products




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

import React,{useEffect} from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import CartContainer from '../../components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
 import { Calculate } from '../../app/CartHandler/CartSlice';
 import '../../styles/CartPage.css';
export default function CartPage() {

    const dispatch = useDispatch();
     const products = useSelector((state) => state.cart.cartProducts);
    useEffect(() => {
        dispatch(Calculate(products));
    }, [products]);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} lg={7} className='p-5'>
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
                            return <CartContainer key={key} product={product} />;
                        })}
                    </Col>
                    <Col sm={12} lg={5} className='p-5 Bill-Box'>
                        <h4>Cart totals</h4>
                        <hr />
                        <Row>
                            <Col sm={6}>SubTotal</Col>
                            <Col sm={6} style={{ textAlign: 'right' }}>
                                Rs{totalPrice}
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col sm={6}>Total</Col>
                            <Col sm={6} style={{ textAlign: 'right' }}>
                                Rs{totalPrice}
                            </Col>
                        </Row>
                        <div className='text-center mt-5'>
                            <Button>Proceed to checkout</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
