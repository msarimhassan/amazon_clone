import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string().required('Email in required').email('Enter a valid email'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
   
});
