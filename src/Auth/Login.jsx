import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { loginSchema } from '../validations/LoginSchema';


const initialValues={
    username: '',
    password:''
};

const onSubmit=(values)=>{
      console.log(values);
}


const Login = () => {
      const { values, handleChange, handleSubmit, errors } = useFormik({
          initialValues,
          onSubmit,
         validationSchema:loginSchema
        
      });
 console.log({errors});
    return (
        <div className='main-login rounded'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className=' border shadow login-form'>
                <Form inline>
                    <h2>Sign in</h2>

                    <Label className='me-sm-2' for='username'>
                        UserName
                    </Label>
                    <Input
                        name='username'
                        type='text'
                        onChange={handleChange}
                        value={values.username}
                    />
                    {errors.username && (
                        <p className='text-danger fst-italic my-1 fw-bold'>{errors.username}</p>
                    )}

                    <Label className='me-sm-2' for='Password'>
                        Password
                    </Label>
                    <Input
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && (
                        <p className='text-danger fst-italic my-1 fw-bold'>{errors.password}</p>
                    )}
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
