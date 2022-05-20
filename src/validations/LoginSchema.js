import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username in required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
   
});
