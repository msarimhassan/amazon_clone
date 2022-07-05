import React from 'react';
import { Label, Input } from 'reactstrap';

const AuthInput = ({ label, name, type, onChange, value, error }) => (
    <>
        <Label>
            {label}
        </Label>
        <Input name={name} type={type} onChange={onChange} value={value} />
        <div className='text-danger'> {error[name]} </div>
    </>
);

export default AuthInput;
