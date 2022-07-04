import React from 'react';
import { Label, Input, Button } from 'reactstrap';
import '../styles/CartPage.css';
import { useFormik } from 'formik';
import { ForgetPassSchema } from '../validations/ForgetPassSchema';
import { ACNetwork, Urls, config } from '../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import NavRoutes from '../common/NavRoutes';

const initialValues = {
    email: '',
};

export default function ForgetPassword() {
  let navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
        const response = await ACNetwork.post(Urls.forgetPassword,data,(await config()).headers);
        console.log(response);
        if (response.status=='404') {
          return  toast.error(response.data.error, {
                position: toast.POSITION.TOP_RIGHT,
           });
          
        }
      navigate(NavRoutes.codeVerification, { state: { code: response.data.code } });
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: ForgetPassSchema,
    });

    return (
        <div
            className='d-flex align-items-center justify-content-center flex-column'
            style={{ height: '80vh' }}
        >
            <div className='border p-5 mt-4'>
                <h1>Password assistance</h1>
                <p>Enter the email address associated with you Amazon account</p>
                <Label>Email</Label>
                <Input name='email' type='email' value={values.email} onChange={handleChange} />
                <span style={{ color: 'red' }}>{errors && errors['email']}</span>
                <br />
                <Button
                    className='amazon-btn mt-4'
                    style={{ marginLeft: '110px' }}
                    onClick={handleSubmit}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
