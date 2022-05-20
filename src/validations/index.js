import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    repassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    city: Yup.string().required('City is required'),
    stname: Yup.string().required('Street Name is required'),
    stno: Yup.string().required('Street Number is required'),
    zipcode: Yup.string().required('Zip Code is required'),
});
