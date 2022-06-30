import React, { useEffect, useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
import '../styles/CartPage.css';

export default function Drawer({ children,open,setOpen,Header }) {
    return (
        <div>
            {/* {show ? (
                <Button onClick={() => setOpen(!open)} className='float-end amazon-btn mt-3'>
                    {btnText}
                </Button>
            ) : null} */}
            <Offcanvas isOpen={open} direction='end' toggle={()=>setOpen(!open)}>
                <OffcanvasHeader toggle={()=>setOpen(!open)} >
                   {Header}
                </OffcanvasHeader>
                <OffcanvasBody>{children}</OffcanvasBody>
            </Offcanvas>
        </div>
    );
}
