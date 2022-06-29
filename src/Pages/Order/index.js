import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import '../../styles/CartPage.css';
import DropDown from '../../components/DropDown';
import Drawer from '../../components/Drawer';
import AddressForm from './AddressForm';
import OrderBill from './OrderBill';
import RadioButton from '../../components/RadioButton';
import { ACNetwork, config, Urls } from '../../config';
import CardForm from './CardForm';
import { toast, ToastContainer } from 'react-toastify';
import NavRoutes from '../../common/NavRoutes';

const PaymentMethod = [
    {
        _id: 0,
        mode: 'Cash on Delivery',
    },
    {
        _id: 1,
        mode: 'card',
    },
];

export default function Order() {
    useEffect(() => {
        getAddresses();
        getCards();
    }, []);

    const [userAddress, setUserAddress] = useState();
    const [mode, setMode] = useState(PaymentMethod[0]);
    const [userCard, setUserCard] = useState();
    const [address, setAddress] = useState();
    const [cardList, setCardList] = useState([]);
    let navigate = useNavigate();
    const getAddresses = async () => {
        const response = await ACNetwork.get(Urls.getAddresses, (await config()).headers, {});
        console.log(response.data);
        setAddress(response.data.addresses);
    };

    const getCards =async() => {
        const response = await ACNetwork.get(Urls.getCards, (await config()).headers);
        setCardList(response.data.cards);
    }

    const handleOrder = () => {
        if (!userAddress) {
            toast.warn('Please Select the Address');
            return;
        }
        navigate(NavRoutes.confirmOrder, {
            state: { paymentMethod: mode, address: userAddress, cardId:userCard&&userCard._id },
        });
    };
    return (
        <>
            <ToastContainer />
            <Container>
                <Row>
                    <Col lg={8}>
                        <DropDown Header='Address Details'>
                            <Drawer btnText='Add Address' show={true}>
                                <AddressForm setAddress={setAddress} />
                            </Drawer>
                            <br />
                            <br />
                            {address?.map((address) => {
                                return (
                                    <RadioButton
                                        key={address._id}
                                        label={
                                            address.country +
                                            ' ' +
                                            address.state +
                                            ' ' +
                                            address.city +
                                            ' ' +
                                            address.area +
                                            ' ' +
                                            address.streetNumber +
                                            ' ' +
                                            address.houseNumber
                                        }
                                        onClick={() => setUserAddress(address)}
                                        selected={userAddress?._id === address._id}
                                    />
                                );
                            })}
                        </DropDown>
                        <DropDown Header='Payment Method'>
                            <Drawer btnText='Add Card' show={true}>
                                <CardForm addCard={setCardList} />
                            </Drawer>
                            <div className='d-flex flex-row'>
                                {PaymentMethod.map((payment) => {
                                    return (
                                        <div>
                                            <RadioButton
                                                key={payment._id}
                                                label={payment.mode}
                                                onClick={() => setMode(payment)}
                                                selected={mode?._id === payment._id}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            {mode?.mode == 'card' ? (
                                <h4 className='mt-4 ms-4'>Select Card</h4>
                            ) : null}

                            {mode?.mode == 'card'
                                ? cardList?.map((Card) => {
                                      return (
                                          <RadioButton
                                              key={Card._id}
                                              label={Card.cardNumber}
                                              onClick={() => setUserCard(Card)}
                                              selected={userCard?._id === Card._id}
                                          />
                                      );
                                  })
                                : null}
                        </DropDown>
                        <Button className='float-end mt-4 amazon-btn' onClick={() => handleOrder()}>
                            Next
                        </Button>
                    </Col>
                    <Col lg={4}>
                        <OrderBill />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

// flag={mode?.mode=='Card'}
