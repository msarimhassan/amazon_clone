import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import { ACNetwork, Urls } from '../../config';
import Loader from '../../assets/animations';
import '../../styles/Category.css';
const ProductCardHandler = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log('We are in useEffcet');
        getProduct();
        console.log({ products });
    }, []);
    let location = useLocation();
    const [products, setProducts] = useState();

    const getProduct = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getProducts + location.state.id, {});
        setProducts(response.data.products);
        setLoading(false);
    };
    const { t } = useTranslation(['Products']);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1 className='heading'>{location.state.name}</h1>
                    <Container className='mt-4'>
                        <Row>
                            {products.map((product) => {
                                return (
                                    <Col sm={3} md={6} lg={3}>
                                        <ProductCard key={product._id} product={product} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </>
            )}
        </div>
    );
};
export default ProductCardHandler;
