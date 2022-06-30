import React,{useEffect,useState} from 'react';
import DropDown from './DropDown';
import { ACNetwork, Urls, config } from '../../config';
import Loader from '../../assets/animations';

export default function OrderDetails() {
    const [userOrders, setUserOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const getOrder = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getOrders, (await config()).headers);
        console.log(response.data);
        setUserOrders(response.data.orders);
        setLoading(false);
    }
    useEffect(() => {
        getOrder();
   },[])
    
    return <>
        {loading ? <Loader /> :
            userOrders.map((order) => {
                return <DropDown order={order}  />;
            })}
    </>;      
        
}
