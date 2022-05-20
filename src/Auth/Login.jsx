// Library Imports
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

// Custom Imports
import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { loginSchema } from '../validations/LoginSchema';
import AuthInput from './Signup/AuthInput';

const initialValues = {
    username: '',
    password: '',
};

const onSubmit = (values) => {
    console.log(values);
};

const Login = () => {
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    return (
        <div className='main-login rounded'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className=' border shadow login-form'>
                <Form inline>
                    <h2>Sign in</h2>
                    <AuthInput
                        label='UserName'
                        name='username'
                        type='text'
                        value={values.username}
                        onChange={handleChange}
                        error={errors}
                    />
                    <AuthInput
                        label='Password'
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                        error={errors}
                    />
                    <Button type='submit' onClick={handleSubmit} className='w-100 mt-4 btn-color'>
                        Sign in
                    </Button>
                </Form>
                <hr />
                <NavLink to='/signup'>
                    <Button type='button' className='w-100'>
                        I am a new customer
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Login;
