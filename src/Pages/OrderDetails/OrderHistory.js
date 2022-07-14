import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';

import { ACNetwork, Urls, config } from '../../config';
import Loader from '../../assets/animations';
import DropDown from './DropDown';
import NoData from '../../components/NoData';

export default function OrderHistory() {
    const [loading, setLoading] = useState(true);
    const [page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [userOrders, setUserOrders] = useState([]);
     const getOrderHistory = async (page) => {
         setLoading(true);
         const response = await ACNetwork.get(
             Urls.getOrderHistory + `?page=${page}&limit=10`,
             (
                 await config()
             ).headers
         );
         setUserOrders([...userOrders,...response.data.orders]);
         setTotalPages(response.data.totalpages);
         setLoading(false);
    };
    useEffect(() => { getOrderHistory(page) }, []);
    return (
       <>
   {loading ? (
                <Loader />
            ) : (
                <>
                    {userOrders.length > 0 ? (
                        userOrders.map((order) => {
                            return <DropDown order={order} />;
                        })
                    ) : (
                        <NoData />
                    )}
                </>
            )}
            {page < totalPages && (
                <Button
                    onClick={() => {
                        setPages(page + 1);
                        getOrderHistory(page + 1);
                    }}
                >
                    More
                </Button>
            )}
            </>
  )
}
