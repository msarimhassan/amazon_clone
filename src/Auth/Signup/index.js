    import React, { useState } from 'react';
    import { Form } from 'reactstrap';
    import { useFormik } from 'formik';

    import Logo from '../../assets/logo.png';
    import '../../styles/Form.css';
    import { signupSchema } from '../../validations';

    const initialValues = {
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const Signup = () => {
        const { values, handleChange, handleSubmit, errors } = useFormik({
            initialValues,
            onSubmit,
            validationSchema: signupSchema,
        });

        return (
            <div className='main-login'>
                <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />
            
                <div className=' border shadow login-form rounded'>
                    <Form inline>
                        <h2>Create Account</h2>
                    </Form>
                </div>
            </div>
        );
    };
    export default Signup;
