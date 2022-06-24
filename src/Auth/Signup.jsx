import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { signupSchema } from '../validations';
import GeneralInfoForm from './Signup/GeneralForm';
import AddressForm from './Signup/AddressForm';
import ACNetwork from '../config/ACNetwork';
import Urls from '../config/Urls';
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

const onSubmit = async (values) => {
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
    const response = await ACNetwork.post(Urls.signUp,obj,{});

    console.log(response.ok);
};

const Signup = () => {
    const [isNext, setisNext] = useState(true);
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: signupSchema,
    });

    const handleNext = () => {
        setisNext(!isNext);
    };
    const { t } = useTranslation(['Signup']);
    return (
        <div className='main-login pb-5'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />
            <div className=' border shadow login-form rounded'>
                <Form inline>
                    <h2>{t('createaccount')}</h2>
                    {isNext ? (
                        <GeneralInfoForm
                            values={values}
                            onNext={handleNext}
                            errors={errors}
                            handleChange={handleChange}
                        />
                    ) : (
                        <AddressForm
                            values={values}
                            errors={errors}
                            onBackClick={handleNext}
                            handleChange={handleChange}
                            onSignup={handleSubmit}
                        />
                    )}
                </Form>
            </div>
        </div>
    );
};
export default Signup;
