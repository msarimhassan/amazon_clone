import React from 'react';
import { useTranslation } from 'react-i18next';
import LoadingButton from '../../components/LoadingButton';


import AuthInput from './AuthInput';

const GeneralInfoForm = ({ values, onSignUp, handleChange, errors,loading }) => {
    const { t } = useTranslation(['Signup']);
    return (
        <div>
            <AuthInput
                label='Name'
                name='name'
                type='text'
                value={values.name}
                onChange={handleChange}
                error={errors}
            />

            <AuthInput
                label='Email'
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
                label='Phone'
                name='phoneNumber'
                type='text'
                value={values.phonNumber}
                onChange={handleChange}
                error={errors}
            />
            <div onClick={onSignUp} className='mt-3'>
                <LoadingButton loading={loading} type='submit' text={t('signup')} />
            </div>
        </div>
    );
};

export default GeneralInfoForm;
