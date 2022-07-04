import React from 'react';
import { Form } from 'reactstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { signupSchema } from '../validations';
import GeneralInfoForm from './Signup/GeneralForm';
import { ACNetwork, Urls, config } from '../config';
import useToken from '../hooks/useToken';
import NavRoutes from '../common/NavRoutes';

const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
};

const Signup = () => {
    let navigate = useNavigate();
    const { Login } = useToken();
    const onSubmit = async (values) => {
        const { name, email, password, phone, address } = values;
        const obj = { name, email, password, phone, address };
       
        const response = await ACNetwork.post(Urls.signUp, obj, (await config()).headers);
      
        Login(response.data.token);
        navigate(NavRoutes.Homepage);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: signupSchema,
    });

    const { t } = useTranslation(['Signup']);
    return (
        <div className='main-login pb-5'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />
            <div className=' border shadow login-form rounded'>
                <Form inline>
                    <h2>{t('createaccount')}</h2>

                    <GeneralInfoForm
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        onSignUp={handleSubmit}
                    />
                </Form>
            </div>
        </div>
    );
};
export default Signup;
