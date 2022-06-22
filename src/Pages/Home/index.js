import React, { useState, useEffect } from 'react';
import { ACNetwork, Urls } from '../../config';
import Loader from '../../assets/animations';

import CardHandler from './CardHandler';

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GetAllCategories();
    }, []);

    const GetAllCategories = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getCategories, {});
        setCategories(response.data.categories);
        setLoading(false);
    };
    return <>{loading ? <Loader /> : <CardHandler categories={categories} />}</>;
};

export default HomePage;
