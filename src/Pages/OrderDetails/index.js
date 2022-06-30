import React, { useState } from 'react';

import OrderHistory from './OrderHistory';
import MyOrders from './MyOrders';

export default function OrderDetails() {
    const [currentTab, setCurrentTab] = useState('orders');

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div
                    className='tab'
                    style={{ backgroundColor: currentTab === 'orders' ? '#f5bb5c' : 'white', color: currentTab === 'orders' ? 'white' : 'black' }}
                    onClick={() => setCurrentTab('orders')}
                >
                    My Orders
                </div>
                <div
                    className='tab'
                    style={{ backgroundColor: currentTab === 'orders' ? 'white' : '#f5bb5c', color: currentTab === 'orders' ? 'black' : 'white'  }}
                    onClick={() => setCurrentTab('ordershistory')}
                >
                    Orders History
                </div>
            </div>

            {/* conditional rendering  */}
            {currentTab === 'orders' ? <MyOrders /> : <OrderHistory />}
        </>
    );
}
