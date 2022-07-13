// import React, { useEffect, useState } from 'react';
// import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
// import { ACNetwork, Urls, config } from '../../config';
// import UserChat from './UserChat';

// const ChatList = ({ render, setRender, conversations = [], setProductId,setConversationId,setShopId,open,setOpen }) => {
//     const SetCredentials = (value) => {
//         setProductId(value.conversation.productId);
//         setConversationId(value.conversation._id);
//         setShopId(value.shop);
//         setRender(!render);
//     };
//     return (
//          <Offcanvas isOpen={open} direction='start' toggle={() => setOpen(!open)}>
//                     <OffcanvasHeader toggle={() => setOpen(!open)}>
//                         {render ? 'ChatList' : 'Messages'}
//                  </OffcanvasHeader>
//         <OffcanvasBody style={{ height: '80%', flexGrow: 1 }}>
//             {conversations?.map((chat) => {
//                 return (
//                     <div
//                         className='border p-3 d-flex justify-content-between mt-1'
//                         onClick={() => SetCredentials(chat)}
//                     >
//                         {chat.conversation.chatRoom}
//                     </div>
//                 );
//             })}
//             </OffcanvasBody>
//             </Offcanvas>
//     );
// };

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

// export default function ChatScreen() {
//     const [open, setOpen] = useState(true);
//     const [render, setRender] = useState(true);
//     const [showModel, setShowModal] = useState(false);
//     const [conversations, setConversations] = useState([]);
//     const [productid, setProductid] = useState('');
//     const [conversationId, setConversationId] = useState('');
//     const [shopId, setShopId] = useState('');

//     useEffect(() => {
//         GetConversation();
//     }, []);
//     const GetConversation = async () => {
//         const response = await ACNetwork.get(Urls.getConversations, (await config()).headers);
//         setConversations(response.data.conversations);
//     };

//     const handleCanvas = () => {
//         setOpen(!open);
//         setRender(true);
//     }
//     return (
//         <>
//             <Button onClick={() =>handleCanvas()}>Open Chat</Button>
//             <div>
//                     {render ? (
//                         <ChatList
//                             render={render}
//                             setRender={setRender}
//                             conversations={conversations}
//                             setProductId={setProductid}
//                             setConversationId={setConversationId}
//                         setShopId={setShopId}
//                         open={open}
//                         setOpen={setOpen}
//                         />
//                     ) : <UserChat showModel={true} />}
//             </div>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react'
import { ACNetwork, Urls, config } from '../../config';
import Loader from '../../assets/animations';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Input, Button } from 'reactstrap';
import { Icons } from '../../common';
import useToken from '../../hooks/useToken';


const MyMessages = ({ message }) => {
    return (
        <div className='d-flex justify-content-end'>
            <div className='user-message'>{message}</div>
        </div>
    );
};

const NotMyMessages = ({ message }) => {
    return <div className='shop-message'>{message}</div>;
};

const Messages=({ conversation }) =>{
    const {currentUser } = useToken();
    return (
        <>
               
            {conversation.map((message) => {
                if (message.sender === currentUser._id) {
                    return <MyMessages message={message.message} />
                } 
                else {
                    return <NotMyMessages message={message.message} />
                }
                
         })}
        </>
    );
}







export default function ChatScreen() {
    const [conversations, setConversations] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const { AI } = Icons;
    useEffect(() => {
        GetConversations();
    }, [])
    
    const GetConversations = async () => {
        setLoading(true);
        const response = await ACNetwork.get(Urls.getConversations, (await config()).headers);
        setConversations(response.data.conversations);
        setLoading(false);
    
    }

    

    const GetMessages = async (id) => {
        setOpen(true);
        const response = await ACNetwork.get(Urls.getMessage + id, (await config()).headers);
        setMessages(response.data.messages);
    }
    return (
  <>
            {Loading ? <Loader /> :
        <div className='d-flex flex-row'>
          <div>
                        {conversations?.map((conversation) => {
                            return <div onClick={()=>GetMessages(conversation.conversation._id)} key={conversation._id} >{conversation.conversation.chatRoom}</div>
              })}
          </div>
          <div>
               <Offcanvas isOpen={open} direction='end' toggle={() => setOpen(!open)}>
                <OffcanvasHeader toggle={() => setOpen(!open)}>Chat</OffcanvasHeader>
                <OffcanvasBody style={{ height: '80%', flexGrow: 0 }}>
                    <div className='chat-section'>
                       {messages&&<Messages conversation={messages}/>}
                    </div>
                </OffcanvasBody>
                <div className='d-flex create-message'>
                    <div>
                        <Input
                            placeholder='Enter a message'
                            className='message-input'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div>
                        <Button className='ms-2 send-btn' onClick={() =>console.log('sendmessage')}>
                            <AI.AiOutlineSend size={20} />
                        </Button>
                    </div>
                </div>
            </Offcanvas>
          </div>

              
         </div>}
            </>
  )
}
