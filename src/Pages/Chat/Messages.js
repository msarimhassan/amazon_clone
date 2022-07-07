import React from 'react'
import useToken from '../../hooks/useToken';

const MyMessages = ({message}) => {
    return (
        <div className='d-flex justify-content-end' >
            <div className='user-message'>{message}</div>
        </div>
    );
}

const NotMyMessages = ({message}) => {
    return <div className='shop-message'>
          {message}
    </div>
}


export default function Messages({ conversation }) {
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
