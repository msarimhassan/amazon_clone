import React from 'react';
import ProductCard from '../../components/ProductCard';
import { Container, Row, Col } from 'reactstrap';
const ProductCardHandler = () => {
    return (
        <div>
            <Container className='d-flex flex-wrap'>
                <h1 className='mt-3'>Electronics</h1>
                <Row>
                   { Array(5).fill(0).map(()=>{
                        return (
                            <Col md={4} sm={10} className='m-lg-0 m-sm-5'>
                                <ProductCard />
                            </Col>
                        );
                    })}
                    
                </Row>
            </Container>
        </div>
    );
};
export default ProductCardHandler;
