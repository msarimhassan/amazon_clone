import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'reactstrap';
const ProductCardHandler = () => {
    return (
        <div>
            <Container>
                <h1 className='mt-3'>Electronics</h1>
                <Row>
                    <Col>col1</Col>
                </Row>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                    {/* <Col>
                      <ProductCard />
                  </Col>
                  <Col>
                      <ProductCard />
                  </Col> */}
                </Row>
            </Container>
        </div>
    );
};
export default ProductCardHandler;
