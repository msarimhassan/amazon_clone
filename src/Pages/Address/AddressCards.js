import React from 'react';
import { Icons } from '../../common'; 

const Card = ({ address, handleDelete }) => {
    const { AI } = Icons;
    
    return (
        <div className='Address-Card d-flex justify-content-between'>
            <div>
                {address.country}
                {address.state}
                {address.city}
                {address.area}
                {address.houseNumber}
                {address.streetNumber}
            </div>
            <div onClick={() => handleDelete(address._id)}>
                <AI.AiFillDelete size='20' />
            </div>
        </div>
    );
};

export default function AddressCards({ addressList, handleDelete }) {
    console.log(addressList);
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {addressList.map((address, index) => {
                return <Card key={index} address={address} handleDelete={handleDelete} />;
            })}
        </div>
    );
}
