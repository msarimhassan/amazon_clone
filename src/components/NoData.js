import React from 'react';
import Empty from '../assets/NoData.PNG';

export default function NoData() {
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ height: '80vh' }}
        >
            <img src={Empty} width="1000px" />
        </div>
    );
}
