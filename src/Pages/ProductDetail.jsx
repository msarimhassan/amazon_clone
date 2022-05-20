import React from 'react';

import { Container,Row,Col,Table } from 'reactstrap';
import Ratings from '../components/Ratings';
import airpods from '../assets/airpods.jpg';
const ProductDetail = () => {
    return (
        <div>
          
            {/* Detail Container */}
            <Container className='mt-5 d-flex justify-content-center '>
                <Row>
                    {/* Column that hold the image  */}
                    <Col>
                        <img src={airpods} alt='airpods' style={{ height: '500px' }} />
                    </Col>
                    {/* Columns that hold the details */}
                    <Col>
                        <h3>Apple Airpods (2nd Generation)</h3>
                        <h6>Visit the store</h6>
                        <Ratings />
                        <hr />
                        <h6 style={{ color: 'red' }}>Currently unavailable.</h6>
                        <h6>We don't know when or if this item will be back in stock.</h6>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope='row'>Special Feature</th>
                                    <td>
                                        IOS Phone Control, Lightweight, Microphone Feature, Sports &
                                        Exercise
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Style</th>
                                    <td> AirPods with Charging Case (wired)</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Model Name</th>
                                    <td> AirPods</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Brand</th>
                                    <td>Apple</td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                        <h6>About this term</h6>
                        <ul>
                            <li>Quick access to Siri by saying “ Hey Siri ”</li>
                            <li>More than 24 hours total listening time with the Charging Case</li>
                            <li>
                                Effortless setup, in-ear detection, and automatic switching for a
                                magical experience
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;