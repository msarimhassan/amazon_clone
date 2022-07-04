// Library Imports
import React, { useEffect } from 'react';
import { Form, Button } from 'reactstrap';
import { NavLink,useNavigate,Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { gapi } from 'gapi-script';
import { toast } from 'react-toastify';

// Custom Imports
import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { loginSchema } from '../validations/LoginSchema';
import AuthInput from './Signup/AuthInput';
// import GoogleLogin from './AuthProviders/GoogleLogin';
// import FacebookLogin from './AuthProviders/FacebookLogin';
import NavRoutes from '../common/NavRoutes';
import {ACNetwork,Urls} from '../config'
import useToken from '../hooks/useToken';
import { Icons } from '../common';

const initialValues = {
    email: '',
    password: '',
};

// const clientId = '602962461138-h83tgckucrbsbh5m4q7e9d1doh3hrq50.apps.googleusercontent.com';
const Login = () => {

    const { Login, setProfile } = useToken();
    const {FC } = Icons;
    let navigate = useNavigate();
        const onSubmit = async(values) => {
        
      const response=await ACNetwork.post(Urls.login,values,{});
     
            if (!response.ok)
            {
                return toast.error(response.data.error,{position:toast.POSITION.TOP_RIGHT});
                }
            Login(response.data.token)
            setProfile(response.data.customer);
            navigate(NavRoutes.Homepage);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    useEffect(() => {
       
    }, []);

  


   

    const { t } = useTranslation(['Login']);

    return (
        <div className='main-login rounded'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className=' border shadow login-form'>
                <Form inline>
                    <h2>{t('Signin')}</h2>
                    <AuthInput
                        label='Email'
                        name='email'
                        type='email'
                        value={values.email}
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
                <div>
                    <FC.FcGoogle size={30} />
                </div>
                <br />
                <Link to={NavRoutes.forgetPassword}>ForgetPassword?</Link>
                <NavLink to={NavRoutes.Signup}>
                    <Button type='button' className='w-100 mt-3'>
                        {t('I am a new customer')}
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Login;


//  <FacebookLogin responseFacebook={responseFacebook  componentClicked={componentClicked} />
{/* <GoogleLogin responseGoogle={responseGoogle} /> */ }
//  const responseGoogle = (response) => {
//      console.log(response);
//  };
//   const responseFacebook = (response) => {
//       console.log(response);
//   };
