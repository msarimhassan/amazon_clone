import React from 'react';
import { Label,Input } from 'reactstrap';

const AuthInput = ({ label, name, type, onChange, value,error }) => (
    <>
        <Label className='me-sm-2' for='firstname'>
            {label}
        </Label>
        <Input name={name} type={type} onChange={onChange} value={value} />
        <div className='text-danger fst-italic my-1 fw-bold'> {error[name]} </div>
    </>
);

export default AuthInput;
