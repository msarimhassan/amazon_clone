import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import { Icons } from '../../common';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import Messages from './Messages';
import { io } from 'socket.io-client';
import { ACNetwork, Urls, config } from '../../config';
import useToken from '../../hooks/useToken';

// const socket = io.connect("http://");

export default function Chat({ open, setOpen, Header, conversationId, shopId }) {
    const { AI } = Icons;
    const [message, setMessage] = useState('');
    const { currentUser } = useToken();
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        GetMessages();
    }, []);

    useEffect(() => {
        const socket = io('https://amazon-clone-12345.herokuapp.com');
        socket.on('connection', (data) => {
            console.log({ data });
        });
        socket.on(`conversation-${conversationId}`, (data) => {
            setConversation((prevstate) => {
                let newState = prevstate
                return [...newState,data]
            })
        });
    }, []);

    const GetMessages = async () => {
        const response = await ACNetwork.get(
            Urls.getMessage + conversationId,
            (
                await config()
            ).headers
        );
        setConversation(response.data.messages);
    };

    const SendMessage = async () => {
        if (!message) return;

        const obj = {
            conversation: conversationId,
            message: message,
            user: currentUser._id,
            shop: shopId,
            sender: currentUser._id,
        };
        await ACNetwork.post(Urls.sendMessage, obj, (await config()).headers);
        setMessage('');
    };

    return (
        <div>
            <Offcanvas isOpen={open} direction='end' toggle={() => setOpen(!open)}>
                <OffcanvasHeader toggle={() => setOpen(!open)}>{Header}</OffcanvasHeader>
                <OffcanvasBody style={{ height: '80%', flexGrow: 0 }}>
                    <div className='chat-section'>
                        {conversation && <Messages conversation={conversation} />}
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
                        <Button className='ms-2 send-btn' onClick={() => SendMessage()}>
                            <AI.AiOutlineSend size={20} />
                        </Button>
                    </div>
                </div>
            </Offcanvas>
        </div>
    );
}
