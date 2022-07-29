import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import i18next from 'i18next';

import ProductCard from '../../components/ProductCard';
import { ACNetwork, config, Urls } from '../../config';
import Loader from '../../assets/animations';
import '../../styles/Category.css';
import NoData from '../../components/NoData';

const ProductCardHandler = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getProduct(page);
    }, []);
    let location = useLocation();
    const [products, setProducts] = useState([]);

    const getProduct = async (page) => {
        setLoading(true);
        const obj = {
            latitude: null,
            longitude: null,
        };

        const response = await ACNetwork.post(
            Urls.getProducts(i18next.language) + location.state.id + `?page=${page}&limit=10`,
            obj,
            (
                await config()
            ).headers
        );
        setProducts([...products, ...response.data.products]);
        setCategory(response.data.category);
        setTotalPages(response.data.totalPages);
        setLoading(false);
    };
    const { t } = useTranslation(['Products']);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {products.length > 0 ? (
                        <>
                            <h1 className='heading'>{category && category}</h1>
                            <Container className='mt-4'>
                                <Row>
                                    {products.map((product, index) => {
                                        return (
                                            <Col sm={3} md={6} lg={3} className='mt-3 mb-3'>
                                                <ProductCard key={index} product={product} />
                                            </Col>
                                        );
                                    })}
                                </Row>
                                {page < totalPages && (
                                    <Button
                                        onClick={() => {
                                            getProduct(page + 1);
                                            setPage(page + 1);
                                        }}
                                    >
                                        More
                                    </Button>
                                )}
                            </Container>
                        </>
                    ) : (
                        <NoData />
                    )}
                </>
            )}
        </div>
    );
};
export default ProductCardHandler;
