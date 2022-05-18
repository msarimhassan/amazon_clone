import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Logo from '../assets/logo.png';
import '../styles/Form.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className='main-login rounded'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className=' border shadow login-form'>
                <Form style={{}} inline>
                    <h2>Sign in</h2>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2' for='username'>
                            UserName
                        </Label>
                        <Input id='username' name='username' type='text' />
                    </FormGroup>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2' for='Password'>
                            Password
                        </Label>
                        <Input id='examplePassword' name='password' type='password' />
                    </FormGroup>
                    <Button className='w-100 mt-4 btn-color'>
                        Sign in
                    </Button>
                </Form>
                <hr />
                <NavLink to='/signup'>
                    <Button className='w-100'>I am a new customer</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Login;
