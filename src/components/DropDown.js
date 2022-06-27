import React,{useState} from 'react'
import { Accordion,AccordionHeader,AccordionBody,AccordionItem } from 'reactstrap';

export default function DropDown({Header,children}) {
    const [isOpen,setisOpen]=useState(false);
  return (
      <div className='d-flex justify-content-center align-items-center mt-5'>
          <Accordion
              flush
              open={isOpen ? '1' : null}
              toggle={function noRefCheck() {}}
              className='w-100'
          >
              <AccordionItem>
                  <AccordionHeader targetId='1' onClick={() => setisOpen(!isOpen)}>
                      {Header}
                  </AccordionHeader>
                  <AccordionBody accordionId='1'>{children}</AccordionBody>
              </AccordionItem>
          </Accordion>
      </div>
  );
}
