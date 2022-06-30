import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';


import { ACNetwork, Urls, config } from '../../config';
import Loader from '../../assets/animations';
import DropDown from './DropDown';
import NoData from '../../components/NoData';


export default function MyOrders() {

      const [userOrders, setUserOrders] = useState([]);
      const [loading, setLoading] = useState(true);
      const [page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const getOrder = async (page) => {
        setLoading(true);
        const response = await ACNetwork.get(
            Urls.getOrders + `?page=${page}&limit=${totalPages}`,
            (
                await config()
            ).headers
        );
        console.log(response.data);
        setUserOrders(response.data.orders);
        setTotalPages(response.data.totalpages);
        setLoading(false);
    };

    useEffect(() => {
        getOrder(page);
    },[])
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
                      getOrder(page + 1);
                  }}
              >
                  More
              </Button>
          )}
      </>
  );
}
