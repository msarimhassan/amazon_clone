import React from 'react';
import { Button } from 'reactstrap';
import AuthInput from './AuthInput';
import { useTranslation } from 'react-i18next';

const AddressForm = ({ onBackClick, onSignup, values, handleChange, errors }) => {
    const {t}=useTranslation(["Signup"])
    return (
        <div id='address'>
            <AuthInput
                label={t("city")}
                name='city'
                type='text'
                value={values?.city}
                onChange={handleChange}
                error={errors}
            />

            <AuthInput
                label={t("streetname")}
                name='stname'
                type='text'
                value={values.stname}
                onChange={handleChange}
                error={errors}
            />
            <AuthInput
                label={t("streetnumber")}
                name='stno'
                type='number'
                value={values.stno}
                onChange={handleChange}
                error={errors}
            />
            <AuthInput
                label={t("zipcode")}
                name='zipcode'
                type='text'
                value={values.zipcode}
                onChange={handleChange}
                error={errors}
            />
            <Button type='Button' onClick={onBackClick} className='m-2'>
                {t("back")}
            </Button>
            <Button className='m-2 btn-color' type='submit' onClick={onSignup}>
                {t("signup")}
            </Button>
        </div>
    );
};

export default AddressForm;
