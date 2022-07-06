import React from 'react';
import { Icons } from '../../common'; 
import { Row, Col } from 'reactstrap';
const Card = ({ address, handleDelete }) => {
    const { AI,MD } = Icons;
    
    return (
        <div className='p-5 m-3 Address-Card2'>
            <div style={{ float: 'right' }} onClick={() => handleDelete(address._id)}>
                <AI.AiFillDelete size='20' color='red' />
            </div>
            <MD.MdOutlineLocationOn size={30} color='#f5bb5c' />
            <span style={{ color: '#f5bb5c', fontWeight: 'bolder' }}>{address.city}</span>,
            {address.country} <br />
            <span className='ms-4'>
                {' '}
                {address.state},{address.area}, {address.streetNumber},{address.houseNumber}
            </span>
        </div>
    );
};

export default function AddressCards({ addressList, handleDelete }) {
    console.log(addressList);
    return (
        // <div className=''  >
            <div className='d-flex flex-wrap justify-content-center mt-5 '>
                    {addressList?.map((address, index) => {
                        
                        return <Card key={index} address={address} handleDelete={handleDelete} />
                            
                    })}
            </div>
        // </div>
    );
}


