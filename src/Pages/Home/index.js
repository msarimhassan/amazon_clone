import React, { useState, useEffect } from 'react';
import { ACNetwork, config, Urls } from '../../config';
import Loader from '../../assets/animations';

import CardHandler from './CardHandler';
import i18next from 'i18next';
import OneSignalReact from 'react-onesignal';



const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GetAllCategories();
    }, []);

    useEffect(() => {
        OneSignalReact.init({
            appId: 'c39fd41f-9972-43bd-adc8-454cb203c9c0',
        });
    }, []);

    const GetAllCategories = async () => {
        setLoading(true);
        const response = await ACNetwork.get(
            Urls.getCategories(i18next.language),
            (
                await config()
            ).headers
        );
        setCategories(response.data.categories);
        setLoading(false);
    };
    return (
        <>
        
            {loading ? <Loader /> : <CardHandler categories={categories} />}
        </>
    );
};

export default HomePage;
