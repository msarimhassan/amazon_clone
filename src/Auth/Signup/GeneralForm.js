import React from 'react';
import { Button } from 'reactstrap';

import AuthInput from './AuthInput';

const GeneralInfoForm = ({ values, onNext, handleChange, errors }) => {
    return(
    <div>
        <AuthInput
            label='First Name'
            name='firstname'
            type='text'
            value={values.firstname}
            onChange={handleChange}
            error={errors}
        />
        <AuthInput
            label='Last Name'
            name='lastname'
            type='text'
            value={values.lastname}
            onChange={handleChange}
            error={errors}
        />

        <AuthInput
            label='Email'
            name='email'
            type='email'
            value={values.email}
            onChange={handleChange}
            error={errors}
        />
        <AuthInput
            label='Password'
            name='password'
            type='password'
            value={values.password}
            onChange={handleChange}
            error={errors}
        />

        <AuthInput
            label='Confirm Password'
            name='repassword'
            type='password'
            value={values.repassword}
            onChange={handleChange}
            error={errors}
        />

        <Button type='Button' className='w-100 mt-4 btn-color' onClick={onNext}>
            Next
        </Button>
    </div>);
};

export default GeneralInfoForm;
