import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Label, Button, Input } from 'reactstrap';
import { useFormik } from 'formik';
import '../styles/CartPage.css';
import { toast } from 'react-toastify';
import NavRoutes from '../common/NavRoutes';

const initialValues = {
    code: '',
};

export default function CodeVerify() {
  let location = useLocation();
  let navigate = useNavigate();
  

  const onSubmit = (data) => {
      
    console.log(location.state.code);
    console.log(data.code);
        if (location.state.code != data.code) {
            return toast.error('Not matched', {
                position: toast.POSITION.TOP_RIGHT,
            });
      }
      navigate(NavRoutes.newPassword, {
          state: {
              email:location.state.email
          }
      });
      
    };

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
            {location && location.state.code}
            <div className='border p-5'>
                <h1>Verify email address</h1>
                <p>To verify your email. we've send a One Time Password (OTP) to testing</p>
                <Label>Enter OTP</Label>
                <Input name='code' type='text' onChange={handleChange} value={values.code} />
                <Button
                    className='amazon-btn mt-3'
                    style={{ marginLeft: '140px' }}
                    onClick={handleSubmit}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
