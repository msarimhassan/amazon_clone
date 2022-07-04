import React from 'react';
import { Label, Input, Button } from 'reactstrap';
import '../styles/CartPage.css';
import { useFormik } from 'formik';
import { ConfirmPassSchema } from '../validations/ConfirmPassSchema';
import { useLocation,useNavigate } from 'react-router-dom';
import { ACNetwork, Urls, config } from '../config';
import { toast } from 'react-toastify';
import NavRoutes from '../common/NavRoutes';
const initialValues = {
    password: '',
    changepassword: '',
};

export default function NewPassword() {
    let location = useLocation();
    let navigate = useNavigate();

    const onSubmit = async (data) => {
        const newObj = { email: location.state.email, password: data.password };

        const response = await ACNetwork.put(Urls.updatePassword, newObj, (await config()).headers);
    
        if (response.status != '200') {
            return toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
        }
        toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });
        navigate(NavRoutes.Login);
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: ConfirmPassSchema,
    });
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column'
            style={{ height: '80vh' }}
        >
            <div className='border p-5'>
                <h1>Change Password</h1>
                <p>Use the form below to change the password for your Amazon account</p>
                <Label>New Password</Label>
                <Input
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={values.password}
                />
                <span style={{ color: 'red' }}>{errors && errors['password']}</span>
                <br />
                <Label className='mt-1'>Confirm Password</Label>
                <Input
                    name='changepassword'
                    type='password'
                    onChange={handleChange}
                    value={values.changepassword}
                />
                <span style={{ color: 'red' }}>{errors && errors['changepassword']}</span>
                <br />
                <Button
                    className='mt-3 amazon-btn'
                    style={{ marginLeft: '150px' }}
                    onClick={handleSubmit}
                >
                    Change Password
                </Button>
            </div>
        </div>
    );
}
