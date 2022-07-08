import React,{useState} from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader,Input,Button } from 'reactstrap';
import Messages from './Messages';
import { Icons } from '../../common';

export default function UserChat({showModel}) {
    const [open, setOpen] = useState(showModel)
    const [message, setMessage] = useState('');
    const { AI } = Icons;
    
    const SendMessage = () => {
        
    }
  return (
      <Offcanvas isOpen={open} direction='end' toggle={() => setOpen(!open)}>
          <OffcanvasHeader toggle={() => setOpen(!open)}>Chat</OffcanvasHeader>
          <OffcanvasBody style={{ height: '80%', flexGrow: 0 }}>
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
  );
}
