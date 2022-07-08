import React, { useEffect, useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
import { ACNetwork, Urls, config } from '../../config';
import UserChat from './UserChat';

const ChatList = ({ render, setRender, conversations = [], setProductId,setConversationId,setShopId,open,setOpen }) => {
    const SetCredentials = (value) => {
        setProductId(value.conversation.productId);
        setConversationId(value.conversation._id);
        setShopId(value.shop);
        setRender(!render);
    };
    return (
         <Offcanvas isOpen={open} direction='start' toggle={() => setOpen(!open)}>
                    <OffcanvasHeader toggle={() => setOpen(!open)}>
                        {render ? 'ChatList' : 'Messages'}
                 </OffcanvasHeader>
        <OffcanvasBody style={{ height: '80%', flexGrow: 1 }}>
            {conversations?.map((chat) => {
                return (
                    <div
                        className='border p-3 d-flex justify-content-between mt-1'
                        onClick={() => SetCredentials(chat)}
                    >
                        {chat.conversation.chatRoom}
                    </div>
                );
            })}
            </OffcanvasBody>
            </Offcanvas>
    );
};

// const ChatMessages = ({productId}) => {

//     useEffect(() => {
//         GetMessages();
//     }, [])

//     const GetMessages =async () => {
//         const response = await ACNetwork.get(Urls.getMessage+productId, (await config()).headers);
//         console.log(response);
//     }
//     return <OffcanvasBody style={{ height: '80%', flexGrow: 0 }}>
//             <div className='border p-3 d-flex justify-content-between'>

//             </div>
//         </OffcanvasBody>
// }

export default function ChatScreen() {
    const [open, setOpen] = useState(true);
    const [render, setRender] = useState(true);
    const [showModel, setShowModal] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [productid, setProductid] = useState('');
    const [conversationId, setConversationId] = useState('');
    const [shopId, setShopId] = useState('');

    useEffect(() => {
        GetConversation();
    }, []);
    const GetConversation = async () => {
        const response = await ACNetwork.get(Urls.getConversations, (await config()).headers);
        setConversations(response.data.conversations);
    };

    const handleCanvas = () => {
        setOpen(!open);
        setRender(true);
    }
    return (
        <>
            <Button onClick={() =>handleCanvas()}>Open Chat</Button>
            <div>
                    {render ? (
                        <ChatList
                            render={render}
                            setRender={setRender}
                            conversations={conversations}
                            setProductId={setProductid}
                            setConversationId={setConversationId}
                        setShopId={setShopId}
                        open={open}
                        setOpen={setOpen}
                        />
                    ) : <UserChat showModel={true} />}
            </div>
        </>
    );
}
