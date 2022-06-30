import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    AccordionItem,
    Container,
    Row,
    Col,
    Badge,
} from 'reactstrap';
import { ACNetwork, Urls, config } from '../../config';
export default function DropDown({ order }) {
    const [isOpen, setisOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        GetOrderDetails();
    }, []);

    const GetOrderDetails = async () => {
        setLoading(true);
        const response = await ACNetwork.get(
            Urls.getOrderDetail + order._id,
            (
                await config()
            ).headers
        );
        console.log(response.data);
        setOrderDetails(response.data.orderedProduct);
        setLoading(false);
    };
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Accordion
                flush
                open={isOpen ? '1' : null}
                toggle={function noRefCheck() {}}
                className='w-75'
            >
                <AccordionItem>
                    <AccordionHeader targetId='1' onClick={() => setisOpen(!isOpen)}>
                        <div className='d-flex flex-row justify-content-between w-100 '>
                            <h5>
                                Order#{order.orderId}
                            </h5>
                            <h5 className='me-4'>
                                <Badge color={order.status === 'pending' ? 'warning' : 'success'}>
                                    {order.status}
                                </Badge>
                            </h5>
                        </div>
                    </AccordionHeader>
                    <AccordionBody accordionId='1'>
                        {loading ? (
                            <h5>Loading</h5>
                        ) : (
                            <Container>
                                <Row>
                                    <Col sm={4}>Product Name</Col>
                                    <Col sm={4}>Product Qunatity</Col>
                                    <Col sm={4}>Product Price</Col>
                                </Row>
                                <hr />
                                {orderDetails.map((details) => {
                                    return (
                                        <Row>
                                            <Col sm={4}> {details.name}</Col>
                                            <Col sm={4}> {details.quantity}</Col>
                                            <Col sm={4}> {details.unitPrice}</Col>
                                        </Row>
                                    );
                                })}
                                <div className='mt-5'>
                                    <h6>Total-Price :{order.totalPrice}</h6>
                                </div>
                            </Container>
                        )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
