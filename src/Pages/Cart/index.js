import React,{useEffect} from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import CartContainer from '../../components/CartContainer';
import { Calculate } from '../../app/CartHandler/CartSlice';
import '../../styles/CartPage.css';
import NavRoutes from '../../common/NavRoutes'
export default function CartPage() {
    let navigate=useNavigate();
    const dispatch = useDispatch();
     const products = useSelector((state) => state.cart.cartProducts);
    useEffect(() => {
        dispatch(Calculate(products));
    }, [products]);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const handleOrder=()=>{
         navigate(NavRoutes.Order);
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} lg={8} className='p-5'>
                        <h4>Shopping Cart</h4>
                        <hr />
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={2}>Product</Col>
                            <Col sm={2}>Price</Col>
                            <Col sm={2}>Quantity</Col>
                            <Col sm={2}></Col>
                        </Row>
                        <hr />
                        {products.map((product, key) => {
                            return <CartContainer key={key} product={product} />;
                        })}
                    </Col>
                    <Col sm={12} lg={4} className='p-5 Bill-Box'>
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
                            <Button onClick={()=>{handleOrder()}}>Proceed to checkout</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
