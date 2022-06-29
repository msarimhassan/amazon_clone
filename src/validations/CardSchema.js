import * as Yup from 'yup';
export const CardSchema = Yup.object().shape({
    firstName: Yup.string().required('firstname is  required'),
    lastName: Yup.string().required('lastname is required'),
    expiryDate: Yup.string()
        .required('required', 'Enter a valid card number')
        .matches(/([0-9][0-9])\/([0-9][0-9])/),

    cardNumber: Yup.string().min(16).max(16).required(),
    securityCode: Yup.string().min(3).max(3),
});

//  .matches(/^(0[1-9]|1[0-2])([0-9]{2}|[0-9]{2})$/),
