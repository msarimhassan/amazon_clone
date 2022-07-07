import React from 'react'
import { Input, Button } from 'reactstrap'
import { Icons } from '../../common';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import Messages from './Messages';

export default function Chat({open,setOpen,Header}) {
    const { AI } = Icons;
  return (
      //   <div>
      //       <div className='chat-section'>
      //           <Messages />
      //       </div>

      <div>
          <Offcanvas isOpen={open} direction='end' toggle={() => setOpen(!open)}>
              <OffcanvasHeader toggle={() => setOpen(!open)}>{Header}</OffcanvasHeader>
              <OffcanvasBody style={{height:'80%',flexGrow:0}}>
                  <div className='chat-section'>
                      <Messages />
                  </div>
              </OffcanvasBody>
              <div className='d-flex create-message'>
                  <Input placeholder='Enter a message' className='message-input' />
                  <Button className='ms-2 send-btn'>
                      <AI.AiOutlineSend size={20} />
                  </Button>
              </div>
          </Offcanvas>
      </div>
  );
}
