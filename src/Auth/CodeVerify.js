import React from 'react';
import { useLocation } from 'react-router-dom';
import { Label, Button, Input } from 'reactstrap';
import {useFormik} from 'formik';
import '../styles/CartPage.css';
import { toast } from 'react-toastify';

const initialValues={
  code:'',
}

export default function CodeVerify() {
  let location = useLocation();

  const onSubmit = (data) => {
    if (location.state.code !== data.code)
    { 

      toast.error('Not matched', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    
  }

   const { values, handleChange, handleSubmit, errors } = useFormik({
       initialValues,
       onSubmit,
   });

    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column'
            style={{
                height: '80vh',
            }}
        >
            <div className='border p-5'>
                <h1>Verify email address</h1>
                <p>To verify your email. we've send a One Time Password (OTP) to testing</p>
                <Label>Enter OTP</Label>
                <Input name='code' type='text' onChange={handleChange} value={values.code} />
                <Button className='amazon-btn mt-3' style={{ marginLeft: '140px' }} onClick={handleSubmit}>
                    Continue
                </Button>
            </div>
        </div>
    );
}
