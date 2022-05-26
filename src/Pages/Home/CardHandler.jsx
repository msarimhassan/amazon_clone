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
                            <Col md={4} sm={10} className='m-lg-0 m-sm-5' > 
                                <CardContainer />
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
};

export default CardHandler;
