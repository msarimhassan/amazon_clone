import React, { useState, useEffect } from 'react';
import { ACNetwork, Urls, config } from '../../config';
import Loader from '../../assets/animations';
import NoData from '../../components/NoData';
import AddressCards from './AddressCards';
import Drawer from '../../components/Drawer';
import AddressForm from '../Order/AddressForm';
import { Button } from 'reactstrap';
import { toast } from 'react-toastify';

export default function Address() {
    const [loading, setLoading] = useState(true);
    const [addressList, setAddressList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const GetAddresses = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getAddresses,{},(await config()).headers);
        setAddressList(response.data.addresses);
        setLoading(false);
    };
    useEffect(() => {
        GetAddresses();
    }, []);

    const handleDelete =async (id) => {
        setAddressList(
            addressList.filter(address => address._id !== id )
      );
      const response = await ACNetwork.delete(Urls.deleteAddress(id), {},(await config()).headers);
      if (!response.ok) {
      return  toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
      }
      toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT })
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className='mt-4 ms-5'>
                        <Button onClick={() => setShowModal(true)} className='amazon-btn'>
                            Add Address
                        </Button>
                    </div>
                    <Drawer open={showModal} setOpen={setShowModal} Header='Add Address'>
                        <AddressForm
                            setOpen={setShowModal}
                            setAddress={setAddressList}
                            addressList={addressList}
                        />
                    </Drawer>
                    {addressList?.length > 0 ? (
                        <>
                            <AddressCards addressList={addressList} handleDelete={handleDelete} />
                        </>
                    ) : (
                        <NoData />
                    )}
                </>
            )}
        </>
    );
}
