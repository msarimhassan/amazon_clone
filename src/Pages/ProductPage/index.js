import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import { ACNetwork, config, Urls } from '../../config';
import Loader from '../../assets/animations';
import '../../styles/Category.css';
import i18next from 'i18next';
const ProductCardHandler = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState();
    useEffect(() => {
        getProduct();
    }, []);
    let location = useLocation();
    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        setLoading(true);

        const response = await ACNetwork.get(
            Urls.getProducts(i18next.language) + location.state.id,
            (
                await config()
            ).headers
        );
        setProducts(response.data.products);
        setCategory(response.data.category);
        setLoading(false);
    };
    const { t } = useTranslation(['Products']);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1 className='heading'>{category&&category}</h1>
                    <Container className='mt-4'>
                        <Row>
                            {products.map((product, index) => {
                                return (
                                    <Col sm={3} md={6} lg={3}>
                                        <ProductCard key={index} product={product} />
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
