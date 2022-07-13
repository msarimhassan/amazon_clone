import React,{useEffect,useState} from 'react';
import { OffcanvasBody, Offcanvas, OffcanvasHeader, Modal } from 'reactstrap';
import { ACNetwork,Urls,config} from '../../config';





const ChatList = ({ open, setOpen, setShowModal, showModal, setCurrentChat }) => {
    const [conversations, setConversations] = useState([]);
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
                            <div onClick={() => handleModal(conversation)}>
                                {conversation.conversation.chatRoom}
                            </div>
                        );
                    })}
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
};

export default ChatList