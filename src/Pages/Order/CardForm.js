import React from 'react'
import { Container, Row, Col, Input, Label, Button } from 'reactstrap';
import { useFormik } from 'formik';
import '../../styles/CartPage.css'


const initialValues = {
    fname: '',
    lname: '',
    cardNumber: '',
    expireDate: '',
    securityCode:''
}


const CardForm = () => {
    
    const onSubmit =async(values) => {
        console.log(values);
        }
       const { values, handleChange, handleSubmit, errors } = useFormik({
           initialValues,
           onSubmit,
       });
  return (
      <Container>
          <Row>
              <Col sm={12}>
                  <Label>FirstName</Label>
                  <Input name='fname' type='text' onChange={handleChange} value={values.fname} />
              </Col>
          </Row>
          <Row className='mt-3'>
              <Col sm={12}>
                  <Label>LastName</Label>
                  <Input name='lname' type='text' onChange={handleChange} value={values.lname} />
              </Col>
          </Row>
          <Row className='mt-3'>
              <Col sm={12}>
                  <Label>CardNumber</Label>
                  <Input name='cardNumber' type='text' onChange={handleChange} value={values.cardNumber} />
              </Col>
          </Row>
          <Row className='mt-3'>
              <Col sm={12}>
                  <Label>Expiration Date</Label>
                  <Input type='date' name='expireDate' onChange={handleChange} value={values.expireDate} />
              </Col>
          </Row>
          <Row className='mt-3'>
              <Col sm={12}>
                  <Label>SecurityCode</Label>
                  <Input name='securityCode' type='text' onChange={handleChange} value={values.securityCode} />
              </Col>
          </Row>
          <div className='d-flex align-items-center justify-content-center mt-5'>
              <Button className='amazon-btn' onClick={handleSubmit}>Submit</Button>
          </div>
      </Container>
  );
}

export default CardForm;