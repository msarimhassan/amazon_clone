import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import ReactStars from 'react-stars';
import { toast } from 'react-toastify';

import { Container, Row, Col, Table,Button } from 'reactstrap';
import Loader from '../assets/animations';
import { ACNetwork, config, Urls } from '../config';
import { AddToCart } from '../app/CartHandler/CartSlice';
import '../styles/CartPage.css';
import { Icons } from './../common';
import useToken from '../hooks/useToken';
import Chat from './Chat';



const ProductDetail = () => {
    let location = useLocation();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const [showModal, setShowModal] = useState(false);
    const [conversationId, setConversationId] = useState(null);
    const { FC,BS } = Icons;
    const { token} = useToken();
    let dispatch = useDispatch();
    useEffect(() => {
        getProduct();
    }, [location.state.id]);

    const getProduct = async () => {
        setLoading(true);
        
        const response = await ACNetwork.get(
            Urls.getProduct(i18next.language) + location.state.id,
            (
                await config()
            ).headers
        );

        setProduct(response.data.product);

        setLoading(false);
    };
    const ratingChanged = async(res) => {
        console.log(res);
        const obj = {
            productId: location.state.id,
            rating:res,
        };
        const response = await ACNetwork.post(Urls.addRatings, obj, (await config()).headers);
        if (!response.ok) {
           return toast(response.data.error, { position: toast.POSITION.TOP_RIGHT });
        }
        toast(response.data.message, { position: toast.POSITION.TOP_RIGHT });
    }


    const createChat =async () => {
        const response = await ACNetwork.post(Urls.creatChat(i18next.language), { productId: location.state.id }, (await config()).headers);
        console.log(response.data);
        setConversationId(response.data.conversation);
        setShowModal(!showModal);
   }


    return (
        <div>
            {/* Detail Container */}
            {loading ? (
                <Loader />
            ) : (
                <Container className='mt-5 mb-5'>
                    <Row>
                        {/* Column that hold the image  */}
                        <Col lg={6} sm={12}>
                            <img src={product.imageUrl} alt='airpods' style={{ width: '100%' }} />
                        </Col>
                        {/* Columns that hold the details */}
                        <Col lg={6} sm={12}>
                            <h3>{product.name}</h3>
                            <h6>Visit the store</h6>
                            <div style={{ display: 'inline', verticalAlign: 'middle' }}>
                                <FC.FcRating size={30} />
                                <span
                                    style={{
                                        fontSize: '1.2em',
                                        marginTop: '45px',
                                        marginLeft: '15px',
                                    }}
                                >
                                    {product?.rating.avg == null
                                        ? '0'
                                        : Math.ceil(product?.rating.avg)}
                                    /5
                                </span>
                            </div>
                            {token ? (
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={20}
                                    color2={'#ffd700'}
                                />
                            ) : null}
                            <hr />
                            {product.quantity > 0 ? (
                                <div>
                                    <h6 style={{ color: 'green' }}>Available</h6>
                                </div>
                            ) : (
                                <div>
                                    <h6 style={{ color: 'red' }}>Currently unavailable.</h6>
                                    <h6>
                                        We don't know when or if this item will be back in stock.
                                    </h6>
                                </div>
                            )}
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <th scope='row'>Special Feature</th>
                                        <td>{product && product.features}</td>
                                    </tr>

                                    <tr>
                                        <th scope='row'>Brand</th>
                                        <td>{product && product.brandName}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <hr />
                            <h6>About this Product</h6>
                            <div>{product.description}</div>
                            <Button
                                className='float-end mt-5 amazon-btn'
                                onClick={() => dispatch(AddToCart(product))}
                            >
                                Add To Cart
                            </Button>
                            { conversationId&&<Chat open={showModal} setOpen={setShowModal} Header='Chat' conversationId={conversationId} shopId={product.creator._id} />}
                            {token ? (
                                <Button className='float-end mt-5 me-2 amazon-btn' onClick={()=>createChat()}>chat</Button>
                            ) : null}
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default ProductDetail;
