// Library Imports
import React, { useEffect } from 'react';
import { Form, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { gapi } from 'gapi-script';

// Custom Imports
import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { loginSchema } from '../validations/LoginSchema';
import AuthInput from './Signup/AuthInput';
import GoogleLogin from './AuthProviders/GoogleLogin';
import FacebookLogin from './AuthProviders/FacebookLogin';

const initialValues = {
    username: '',
    password: '',
};

const onSubmit = (values) => {
    console.log(values);
};

const clientId = '602962461138-h83tgckucrbsbh5m4q7e9d1doh3hrq50.apps.googleusercontent.com';
const Login = () => {
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    useEffect(() => {
      function Start(){
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
      }
      gapi.load('client:auth2', Start);
    }, []);

    const responseFacebook = (response) => {
        console.log(response);
    };

   const  componentClicked=(res)=>{
        console.log(res);
   }

    const responseGoogle = (response) => {
        console.log( response );
    };

    const { t } = useTranslation(['Login']);

    return (
        <div className='main-login rounded'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className=' border shadow login-form'>
                <Form inline>
                    <h2>{t('Signin')}</h2>
                    <AuthInput
                        label={t('UserName')}
                        name='username'
                        type='text'
                        value={values.username}
                        onChange={handleChange}
                        error={errors}
                    />
                    <AuthInput
                        label={t('Password')}
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                        error={errors}
                    />
                    <Button type='submit' onClick={handleSubmit} className='w-100 mt-4 btn-color'>
                        {t('Signin')}
                    </Button>
                </Form>
                <hr />
              <FacebookLogin responseFacebook={responseFacebook} componentClicked={componentClicked}/>
                <GoogleLogin responseGoogle={responseGoogle} />
                <NavLink to='/signup'>
                    <Button type='button' className='w-100 mt-3'>
                        {t('I am a new customer')}
                    </Button>
                </NavLink>
                
            </div>
        </div>
    );
};

export default Login;
