import React, { useEffect, useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
import '../styles/CartPage.css';

export default function Drawer({ btnText, children, show }) {
    
    const [open, setOpen] = useState(false);
 
    return (
        <div>
            {show ?
            <Button onClick={() => setOpen(!open)} className='float-end amazon-btn'>
                {btnText}
            </Button> : null}
            <Offcanvas
                isOpen={open}
                direction='end'
                toggle={function noRefCheck() {}}

            >
                <OffcanvasHeader toggle={() => setOpen(!open)}>{btnText}</OffcanvasHeader>
                <OffcanvasBody>{children}</OffcanvasBody>
            </Offcanvas>
        </div>
    );
}
