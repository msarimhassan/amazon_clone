import React from 'react';
import { Button } from 'reactstrap';
import AuthInput from './AuthInput';

const AddressForm = ({ onBackClick, onSignup, values, handleChange, errors }) => {
    // const AuthInput = ({ label, name, type, onChange, value }) => (
    //     <>
    //         <Label className='me-sm-2' for='firstname'>
    //             {label}
    //         </Label>
    //         <Input name={name} type={type} onChange={onChange} value={value} />
    //         <div className='text-danger fst-italic my-1 fw-bold'> {errors[name]} </div>
    //     </>
    // );
    console.log({ values });
    return (
        <div id='address'>
            <AuthInput
                label='City'
                name='city'
                type='text'
                value={values?.city}
                onChange={handleChange}
                error={errors}
            />

            <AuthInput
                label='Street Name'
                name='stname'
                type='text'
                value={values.stname}
                onChange={handleChange}
                error={errors}
            />
            <AuthInput
                label='Street Number'
                name='stno'
                type='number'
                value={values.stno}
                onChange={handleChange}
                error={errors}
            />
            <AuthInput
                label='Zip Code'
                name='zipcode'
                type='text'
                value={values.zipcode}
                onChange={handleChange}
                error={errors}
            />
            <Button type='Button' onClick={onBackClick} className='m-2'>
                Back
            </Button>
            <Button className='m-2 btn-color' type='submit' onClick={onSignup}>
                Signup
            </Button>
        </div>
    );
};

export default AddressForm;
