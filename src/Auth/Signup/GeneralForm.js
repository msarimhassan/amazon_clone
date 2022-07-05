import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import LoadingButton from '../../components/LoadingButton';

import AuthInput from './AuthInput';

const GeneralInfoForm = ({ values, onSignUp, handleChange, errors }) => {
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
                name='phone'
                type='text'
                value={values.phone}
                onChange={handleChange}
                error={errors}
            />
            <div  onClick={onSignUp}>
                <LoadingButton/>
            </div>
        </div>
    );
};

export default GeneralInfoForm;
