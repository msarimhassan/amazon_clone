import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Logo from '../assets/logo.png';
import '../styles/Form.css';

const Signup = () => {
    return (
        <div className='main-login'>
            <img src={Logo} alt='Amazaon Logo' style={{ width: '200px' }} />

            <div className=' border shadow login-form rounded'>
                <Form  inline>
                    <h2>Create Account</h2>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2' for='firstname'>
                            First Name
                        </Label>
                        <Input id='firstname' name='firstname' type='text' />
                    </FormGroup>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2' for='lastname'>
                            Last Name
                        </Label>
                        <Input id='lastname' name='lastname' type='text' />
                    </FormGroup>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2' for='email'>
                            Email
                        </Label>
                        <Input id='email' name='email' type='email' />
                    </FormGroup>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2 ' for='Password'>
                            Password
                        </Label>
                        <Input
                            id='examplePassword'
                            name='password'
                            type='password'
                            placeholder='At least 6 characters'
                        />
                    </FormGroup>
                    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
                        <Label className='me-sm-2' for='repassword'>
                            Re-enter password
                        </Label>
                        <Input id='repassword' name='repassword' type='password' />
                    </FormGroup>

                    <Button className='w-100 mt-4 btn-color'>Next</Button>
                </Form>
            </div>
        </div>
    );
};
export default Signup;
