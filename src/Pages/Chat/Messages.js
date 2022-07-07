import React from 'react'

const MyMessages = () => {
    return (
        <div className='d-flex justify-content-end' >
            <div className='user-message'>user-message</div>
        </div>
    );
}

const NotMyMessages = () => {
    return <div className='shop-message'>
          shop-message
    </div>
}


export default function Messages() {
    return (
        <>
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
                <NotMyMessages />
                <MyMessages />
        </>
    );
}
