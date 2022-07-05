// Library Imports
import React, { useEffect,useState } from 'react';
import { Form, Button } from 'reactstrap';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { gapi } from 'gapi-script';
import { toast } from 'react-toastify';

// Custom Imports
import Logo from '../assets/logo2.png';
import '../styles/Form.css';
import { loginSchema } from '../validations/LoginSchema';
import AuthInput from './Signup/AuthInput';
import GoogleLogin from './AuthProviders/GoogleLogin';
// import FacebookLogin from './AuthProviders/FacebookLogin';
import NavRoutes from '../common/NavRoutes';
import { ACNetwork, config, Urls } from '../config';
import useToken from '../hooks/useToken';
import { Icons } from '../common';
import LoadingButton from '../components/LoadingButton';

const initialValues = {
    email: '',
    password: '',
};

// const clientId = '602962461138-h83tgckucrbsbh5m4q7e9d1doh3hrq50.apps.googleusercontent.com';
const Login = () => {
    const { Login, setProfile } = useToken();
    const [loading, setLoading] = useState(false);
    const { FC } = Icons;
    let navigate = useNavigate();
    const onSubmit = async (values) => {
        setLoading(true);
        const response = await ACNetwork.post(Urls.login, values, {});

        if (!response.ok) {
            setLoading(false);
            return toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
        }
        setLoading(false);
        Login(response.data.token);
        setProfile(response.data.customer);
        navigate(NavRoutes.Homepage);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    useEffect(() => {}, []);

    const handleGoogle = async () => {
        const response = await ACNetwork.get(Urls.googleLogin, (await config()).headers, {});

        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log('response', response);
        // console.log(response.accessToken);
    }

    const { t } = useTranslation(['Login']);

    return (
        // <div className='main-login rounded'>
        //
        //     <div className=' border shadow login-form'>
        //         <Form inline>
        //
        //

        //             {/* <Button type='submit' onClick={handleSubmit} className=''>
        //                 
        //             </Button> */}

        //         </Form>
        //         <hr />

        //         {/* <div
        //             className='mx-auto shadow p-3'
        //             style={{ borderRadius: '80px', width: '60px', cursor: 'pointer' }}
        //             onClick={() => handleGoogle()}
        //         >
        //             <FC.FcGoogle size={30} />
        //         </div> */}

        //         <br />

        //     </div>
        // </div>
        <div
            className='d-flex justify-content-center align-items-center flex-column'
            style={{ height: '100vh' }}
        >
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className='border ps-5 pe-5 pt-4 pb-4 mt-3 login-form'>
                <h2>{t('Signin')}</h2>
                <div className='mt-3'>
                    <AuthInput
                        label='Email'
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                        error={errors}
                    />
                </div>
                <div className='mt-3'>
                    <AuthInput
                        label={t('Password')}
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                        error={errors}
                    />
                </div>
                <Link to={NavRoutes.forgetPassword} style={{ float: 'right' }}>
                    ForgetPassword?
                </Link>
                <br />
                <div className='mt-3' onClick={handleSubmit}>
                    <LoadingButton type='submit' loading={loading} text={t('Signin')} />
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <GoogleLogin
                        clientId='480584143172-8hj4e7ej9ca27i5uhv54p5cih7m4uskj.apps.googleusercontent.com'
                        responseGoogle={responseGoogle}
                    />
                </div>
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
{
     
}
//  const responseGoogle = (response) => {
//      console.log(response);
//  };
//   const responseFacebook = (response) => {
//       console.log(response);
//   };
