import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { useFormik } from 'formik';

import Logo from '../../assets/logo.png';
import '../../styles/Form.css';
import { signupSchema } from '../../validations';
import GeneralInfoForm from './GeneralForm';
import AddressForm from './AddressForm';

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
    city: '',
    stname: '',
    stno: '',
    zipcode: '',
};

const onSubmit = (values) => {
    const obj = {
        email: values.email,
        username: values.firstname + values.lastname[0],
        password: values.password,
        name: {
            firstname: values.firstname,
            lastname: values.lastname,
        },
        address: {
            city: values.city,
            street: values.stname,
            number: values.stno,
            zipcode: values.zipcode,
            geolocation: {
                lat: '-37.3159',
                long: '81.1496',
            },
        },
        phone: '1-570-236-7033',
    };
    console.log(obj);
};

const Signup = () => {
    const [isNext, setisNext] = useState(true);
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
                    {isNext ? (
                        <GeneralInfoForm
                            onNext={() => setisNext(!isNext)}
                            values={values}
                            handleChange={handleChange}
                            errors={errors}
                        />
                    ) : (
                        <AddressForm
                            values={values}
                            onBackClick={() => setisNext(!isNext)}
                            handleChange={handleChange}
                            errors={errors}
                            onSignup={handleSubmit}
                        />
                    )}
                </Form>
            </div>
        </div>
    );
};
export default Signup;
