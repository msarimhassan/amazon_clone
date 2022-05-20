import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProductCard from '../../components/ProductCard';
import { products } from '../../common/Products';
const ProductCardHandler = () => {
    const obj={
        name:'Electronics',
        price:'150$'
    }
    ;
    return (
        <div>
            <Container className='d-flex flex-wrap'>
                <h1 className='mt-3'>Electronics</h1>
                <Row>
                   { products.map((product,id)=>{
                        return (
                            <Col md={4} sm={10} className='m-lg-0 m-sm-5'>
                                <ProductCard key={id} product={product}/>
                            </Col>
                        );
                    })}
                    
                </Row>
            </Container>
        </div>
    );
};
export default ProductCardHandler;
