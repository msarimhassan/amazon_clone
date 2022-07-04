import React, { useState } from 'react';
import useToken from '../../hooks/useToken';
import { useFormik } from 'formik';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import '../../styles/CartPage.css';

export default function Profile() {
    const { currentUser } = useToken();

    const [flag, setFlag] = useState(false);
    const initialValues = {
        name: currentUser?.name,
        email: currentUser?.email,
        password: '',
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
    });
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ height: '80vh' }}
        >
            <div className='border d-flex p-5'>
                <div>
                    <h1>Profile</h1>
                    <Row>
                        <Col lg={6} sm={12} md={6}>
                            <Label>Name</Label>
                            <Input
                                name='name'
                                type='text'
                                onChange={handleChange}
                                value={values.name}
                            />
                        </Col>
                        <Col lg={6} sm={12} md={6}>
                            <Label>Email</Label>
                            <Input
                                name='email'
                                disabled
                                type='email'
                                onChange={handleChange}
                                value={values.email}
                            />
                        </Col>
                        <Row className='mt-lg-4'>
                           <span onClick={()=>setFlag(!flag)}>{flag ? 'Hide' : 'Change Password'}</span>
                           {flag? <Col lg={6} md={6} sm={12}>
                                <Label>Password</Label>
                                <Input name='password' type='password' onChange={handleChange} value={values.password} />
                            </Col> : null}
                            <Col lg={6} md={6} sm={12}>
                                <Button className='amazon-btn mt-4 ms-4' onClick={handleSubmit}>Update</Button>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </div>
        </div>      
    );
}
