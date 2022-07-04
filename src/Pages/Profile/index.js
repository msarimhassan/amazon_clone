import React, { useState } from 'react';
import useToken from '../../hooks/useToken';
import { useFormik } from 'formik';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import '../../styles/CartPage.css';
import { ACNetwork, Urls, config } from '../../config';
import { toast } from 'react-toastify';

export default function Profile() {
    const { currentUser } = useToken();

    const [flag, setFlag] = useState(false);
    const initialValues = {
        name: currentUser?.name,
        email: currentUser?.email,
        password: '',
        phoneNumber: currentUser?.phoneNumber,
    };

    const onSubmit = async (data) => {
        if (flag == false && data.password == '') {
            const obj = {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber.toString(),
            };

            const response = await ACNetwork.put(
                Urls.updateCustomer,
                obj,
                (
                    await config()
                ).headers
            );

            if (response.status == 404) {
                return toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
            }
            toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
            return;
        } else if (flag == true && data.password == '') {
            const obj = {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber.toString(),
            };
            const response = await ACNetwork.put(
                Urls.updateCustomer,
                obj,
                (
                    await config()
                ).headers
            );
            if (response.status == 404) {
                return toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
            }
            toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
            return;
        }

        const obj = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber.toString(),
            password: data.password,
        };
        const response = await ACNetwork.put(Urls.updateCustomer, obj, (await config()).headers);
        if (response.status == 404) {
            return toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
        }
        toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
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
                            <span onClick={() => setFlag(!flag)}>
                                {flag ? 'Hide' : 'Change Password'}
                            </span>
                            {flag ? (
                                <Col lg={6} md={6} sm={12}>
                                    <Label>Password</Label>
                                    <Input
                                        name='password'
                                        type='password'
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                </Col>
                            ) : null}
                            <Col lg={6} md={6} sm={12}>
                                <Label>Phone Number </Label>
                                <Input
                                    name='phoneNumber'
                                    type='text'
                                    onChange={handleChange}
                                    value={values.phoneNumber}
                                />
                            </Col>
                            <Button className='amazon-btn mt-3 ms-2' onClick={handleSubmit}>
                                Update
                            </Button>
                        </Row>
                    </Row>
                </div>
            </div>
        </div>
    );
}
