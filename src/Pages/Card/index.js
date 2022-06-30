import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Loader from '../../assets/animations';
import { ACNetwork, Urls, config } from '../../config';
import Drawer from '../../components/Drawer';
import CardForm from '../Order/CardForm';
import { Container, Button } from 'reactstrap';

export default function Card() {
    const [loading, setLoading] = useState(true);
    const [userCards, setUserCards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        getCards();
    }, []);
    const getCards = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getCards, (await config()).headers);
        console.log(response.data);
        setUserCards(response.data.cards);
        setLoading(false);
    };
    return (
        <>
            <Container className='d-flex flex-column'>
                <Button onClick={() => setShowModal(true)} className='amazon-btn'>
                    Add Address
                </Button>
                <Drawer open={showModal} setOpen={setShowModal} Header='Add Card'>
                    <CardForm setShowModal={setShowModal} addCard={setUserCards} />
                </Drawer>
                {loading ? (
                    <Loader />
                ) : (
                    userCards.map((card) => {
                        return <UserCard card={card} />;
                    })
                )}
            </Container>
        </>
    );
}
