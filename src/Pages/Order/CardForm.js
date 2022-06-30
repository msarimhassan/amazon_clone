import React, { useState } from 'react';
import { Container, Row, Col, Input, Label, Button } from 'reactstrap';
import { useFormik } from 'formik';
import '../../styles/CartPage.css';
import { config, ACNetwork, Urls } from '../../config';
import { toast } from 'react-toastify';
import { CardSchema } from '../../validations/CardSchema';

const initialValues = {
    firstName: '',
    lastName: '',
    cardNumber: '',
    securityCode: '',
};

const CardForm = ({ addCard, setShowModal }) => {
    const onSubmit = async (values) => {
        console.log(values);
        const d = new Date(values.expiryDate);
        const mn = d.getMonth();
        console.log(mn);
        const response = await ACNetwork.post(Urls.addCard, values, (await config()).headers);
        console.log(response.data);
        if (!response.ok) {
            toast.error(response.data.error.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }

        toast.success('Card Added', {
            position: toast.POSITION.TOP_RIGHT,
        });

        setShowModal(false);

        addCard((prev) => {
            return [...prev, response.data.card];
        });
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: CardSchema,
    });
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Label>FirstName</Label>
                    <Input
                        name='firstName'
                        type='text'
                        onChange={handleChange}
                        value={values.firstName}
                    />
                    {errors && errors['firstName']}
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm={12}>
                    <Label>LastName</Label>
                    <Input
                        name='lastName'
                        type='text'
                        onChange={handleChange}
                        value={values.lastName}
                    />
                    {errors && errors['lastName']}
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm={12}>
                    <Label>CardNumber</Label>
                    <Input
                        name='cardNumber'
                        type='text'
                        onChange={handleChange}
                        value={values.cardNumber}
                    />
                    {errors && errors['cardNumber']}
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm={12}>
                    <Label>Expiration Date</Label>
                    <Input
                        type='text'
                        placeholder='MM/YY'
                        name='expiryDate'
                        onChange={handleChange}
                        value={values.expiryDate}
                    />

                    {errors && errors['expiryDate']}
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm={12}>
                    <Label>SecurityCode</Label>
                    <Input
                        name='securityCode'
                        type='text'
                        onChange={handleChange}
                        value={values.securityCode}
                    />
                    {errors && errors['securityCode']}
                </Col>
            </Row>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <Button className='amazon-btn' onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </Container>
    );
};

export default CardForm;
