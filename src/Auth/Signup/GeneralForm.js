import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import AuthInput from './AuthInput';

const GeneralInfoForm = ({ values, onNext, handleChange, errors }) => {
    const { t } = useTranslation(['Signup']);
    return (
        <div>
            <AuthInput
                label={t('firstname')}
                name='firstname'
                type='text'
                value={values.firstname}
                onChange={handleChange}
                error={errors}
            />
            <AuthInput
                label={t('lastname')}
                name='lastname'
                type='text'
                value={values.lastname}
                onChange={handleChange}
                error={errors}
            />

            <AuthInput
                label={t('email')}
                name='email'
                type='email'
                value={values.email}
                onChange={handleChange}
                error={errors}
            />
            <AuthInput
                label={t('Password')}
                name='password'
                type='password'
                value={values.password}
                onChange={handleChange}
                error={errors}
            />

            <AuthInput
                label={t('confirmpassword')}
                name='repassword'
                type='password'
                value={values.repassword}
                onChange={handleChange}
                error={errors}
            />

            <Button type='Button' className='w-100 mt-4 btn-color' onClick={onNext}>
                {t('next')}
            </Button>
        </div>
    );
};

export default GeneralInfoForm;
