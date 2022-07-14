import React,{useEffect,useState} from 'react';
import { OffcanvasBody, Offcanvas, OffcanvasHeader, Modal } from 'reactstrap';
import { ACNetwork,Urls,config} from '../../config';
import {Icons} from '../../common';




const ChatList = ({ open, setOpen, setShowModal, showModal, setCurrentChat }) => {
    const [conversations, setConversations] = useState([]);
    const {BS}=Icons
    useEffect(() => {
        MyConversations();
    }, []);

    const handleModal = (conversation) => {
        setOpen(!open);
        setCurrentChat(conversation)
        setShowModal(!showModal);
    };
    const MyConversations = async () => {
        const response = await ACNetwork.get(Urls.getConversations, (await config()).headers);
        setConversations(response.data.conversations);
    };

    return (
        <div>
            <Offcanvas isOpen={open} direction='start' toggle={() => setOpen(!open)}>
                <OffcanvasHeader toggle={() => setOpen(!open)}>Chat Rooms</OffcanvasHeader>
                <OffcanvasBody style={{ height: '80%', flexGrow: 0 }}>
                    {conversations?.map((conversation) => {
                        return (
                            <>
                            <div className='chat-card' onClick={() => handleModal(conversation)}>
                                <div className='p-2'>
                                    <img
                                        src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
                                        className='rounded-circle shadow-4'
                                        style={{width:"50px"}}
                                        alt='Avatar'
                                    />
                                </div>
                                    <div>
                                        <h5>KeyBoard</h5>
                                        {conversation.conversation.chatRoom}
                                    </div>
                                
                                </div>
                              
                                </>
                           
                        );
                    })}
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
};

export default ChatList