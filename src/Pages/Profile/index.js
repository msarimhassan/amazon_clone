import React, { useState, useRef } from 'react';
import useToken from '../../hooks/useToken';
import { useFormik } from 'formik';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import '../../styles/CartPage.css';
import { ACNetwork, Urls, config } from '../../config';
import { toast } from 'react-toastify';
import { Icons } from '../../common';
import LoadingButton from '../../components/LoadingButton';

export default function Profile() {
    const { currentUser,setProfile } = useToken();
    const inputFile = useRef(null);
    const [loading, setLoading] = useState(false);
    const { AI } = Icons;
    const [flag, setFlag] = useState(false);
    const [imgUrl, setImgUrl] = useState(currentUser?currentUser.image:'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp');
    const [baseUrl, setBaseUrl] = useState(null);

    const initialValues = {
        name: currentUser?.name,
        email: currentUser?.email,
        password: '',
        phoneNumber: currentUser?.phoneNumber,
    };

    

    const onSubmit = async (data) => {
        setLoading(true);
        
        const { password, phoneNumber, ...restValues } = data;

        let obj = { ...restValues, phoneNumber: phoneNumber.toString() };

        if (flag && password) {
            obj = { ...obj, password };
        }


        if (baseUrl) {
            obj = { ...obj, image: baseUrl };
        }


        const response = await ACNetwork.put(Urls.updateCustomer, obj, (await config()).headers)
        console.log(response);
        if (response.status == 404) {
            setLoading(false);
            return toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
        }
        setLoading(false);
        setProfile(response.data.customer);
        toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
    });

    const handleImage = () => {
        inputFile.current.click();
    };

    const ChangeImage = (e) => {
        console.log(e.target.files[0]);
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log({reader})
            setBaseUrl(reader.result);
        };
         const result = reader.readAsDataURL(e.target.files[0]);
        setImgUrl(URL.createObjectURL(e.target.files[0]));
        setBaseUrl(result);
        console.log({baseUrl})
    };


    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ height: '80vh' }}
        >
            <div className='border d-flex p-5'>
                <div>
                    <div className='d-flex'>
                        <h1>Edit Profile</h1>
                        <div className='ms-3' onClick={() => handleImage()}>
                            <img
                                src={baseUrl ? baseUrl : imgUrl}
                                style={{ objectFit: 'cover' }}
                                className='rounded-circle shadow-4'
                                width='80px'
                                height='80px'
                                alt='Avatar'
                            />
                        </div>
                        <AI.AiFillEdit />
                    </div>
                    <input
                        type='file'
                        id='file'
                        ref={inputFile}
                        onChange={(e) => ChangeImage(e)}
                        style={{ display: 'none' }}
                    />
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
                            <Col lg={6} md={6} sm={12}>
                                <Label>Phone Number </Label>
                                <Input
                                    name='phoneNumber'
                                    type='text'
                                    onChange={handleChange}
                                    value={values.phoneNumber}
                                />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Label>Password</Label>
                                <Input
                                    name='password'
                                    type='password'
                                    onChange={handleChange}
                                    value={values.password}
                                />
                            </Col>
                        </Row>
                    </Row>
                    <input type='checkbox' onChange={() => setFlag(!flag)} className='mt-3' />
                    <label className='ms-2'>Update Password</label>
                    <br />
                    <div onClick={handleSubmit}>
                        <LoadingButton loading={loading} type='submit' text='Update' />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
