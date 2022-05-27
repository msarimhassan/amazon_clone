import React from 'react';
import CardContainer from '../../components/CardContainer';
import { Container, Row, Col } from 'reactstrap';

const CardHandler = () => {
    return (
        <Container className='d-flex flex-wrap mb-5'>
            <Row>
                {Array(5)
                    .fill(0)
                    .map((_) => {
                        return (
                            <Col lg={3} md={4} sm={3} className='m-lg-0 m-md-0 m-sm-3'>
                                <CardContainer />
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
};

export default CardHandler;
