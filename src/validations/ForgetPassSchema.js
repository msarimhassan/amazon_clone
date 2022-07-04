import * as Yup from 'yup';

export const ForgetPassSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Enter a valid email'),
});