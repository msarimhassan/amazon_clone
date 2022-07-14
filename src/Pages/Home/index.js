import React, { useState, useEffect } from 'react';
import { ACNetwork, config, Urls } from '../../config';
import Loader from '../../assets/animations';
import * as PusherPushNotifications from '@pusher/push-notifications-web';
import addNotification from 'react-push-notification';

import CardHandler from './CardHandler';
import i18next from 'i18next';

const buttonClick = () => {
    addNotification({
        title: 'Amazon-Clone',
        subtitle: 'E-commerce app',
        message: 'This is a very long message',
        theme: 'darkblue',
        native: true, // when using native, your OS will handle theming.
    });
};

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GetAllCategories();
    }, []);

    useEffect(() => {
       const beamsClient = new PusherPushNotifications.Client({
           instanceId: 'b68c3438-b8da-4987-b801-5860b34eb8fe',
       });

       beamsClient
           .start()
           .then(() => beamsClient.addDeviceInterest('hello'))
           .then(() => console.log('Successfully registered and subscribed!'))
           .catch(console.error);
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
            <button onClick={buttonClick} className='button'>
                Hello world.
            </button>
            {loading ? <Loader /> : <CardHandler categories={categories} />}
        </>
    );
};

export default HomePage;
