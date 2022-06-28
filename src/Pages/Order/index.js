import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../../styles/CartPage.css';
import DropDown from '../../components/DropDown';
import Drawer from '../../components/Drawer';
import AddressForm from './AddressForm';
import OrderBill from './OrderBill';
import RadioButton from '../../components/RadioButton';
import { ACNetwork, config, Urls } from '../../config';
import CardForm from './CardForm';
const Array = [
    {
        _id: 1,
        address: 'House#2,Gulistan Street#2, Chohan Road , Islampura, Lahore , Pakistan',
    },
    {
        _id: 2,
        address: 'House#3,Gulistan Street#3, Chohan Road , Islampura, Lahore , Pakistan',
    },
    {
        _id: 3,
        address: 'House#4,Gulistan Street#4, Chohan Road , Islampura, Lahore , Pakistan',
    },
];

const PaymentMethod = [
    {
        _id: 0,
        mode: 'Cash on Delivery',
    },
    {
        _id: 1,
        mode: 'Card',
    },
];

const CardList = [
    {
        _id: 1,
        CardNumber: '*****09090',
    },
    {
        _id: 2,
        CardNumber: '*****09090',
    },
    {
        _id: 3,
        CardNumber: '*****09090',
    },
];

export default function Order() {
    useEffect(() => {
        getAddresses();
    }, []);

    const [userAddress, setUserAddress] = useState(null);
    const [mode, setMode] = useState(PaymentMethod[0]);
    const [userCard, setUserCard] = useState();
    const [address, setAddress] = useState();
    const getAddresses = async () => {
        const response = await ACNetwork.get(Urls.getAddresses,(await config()).headers,{});    
        console.log(response.data);
        setAddress(response.data.addresses);
    };
    return (
        <>
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
                               <CardForm/>
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
                            {mode?.mode == 'Card' ? (
                                <h4 className='mt-4 ms-4'>Select Card</h4>
                            ) : null}
                           
                            {mode?.mode == 'Card'
                                ? CardList.map((Card) => {
                                      return (
                                          <RadioButton
                                              key={Card._id}
                                              label={Card.CardNumber}
                                              onClick={() => setUserCard(Card)}
                                              selected={userCard?._id === Card._id}
                                          />
                                      );
                                  })
                                : null}
                            <Button className='float-end mt-2 amazon-btn'>Next</Button>
                        </DropDown>
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
