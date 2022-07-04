import React, { useState, useEffect } from 'react';
import { ACNetwork, config, Urls } from '../../config';
import Loader from '../../assets/animations';

import CardHandler from './CardHandler';
import i18next from 'i18next';

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GetAllCategories();
    }, []);

    const GetAllCategories = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getCategories(i18next.language), (await config()).headers);
        setCategories(response.data.categories);
        setLoading(false);
    };
    return <>{loading ? <Loader /> : <CardHandler categories={categories} />}</>;
};

export default HomePage;
