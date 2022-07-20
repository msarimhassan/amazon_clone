import React from 'react'
import { Container, Input, Button } from 'reactstrap'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';


import { ACNetwork, Urls, config } from '../../config';
import useToken from '../../hooks/useToken';
const initialValues = {
    comment:"",
}

export default function Reviews({productId}) {

    
    const onSubmit = async () => {
        const obj = {
            product: productId,
            comment:values.comment
        }
        const response = await ACNetwork.post(Urls.addReview, obj, (await config()).headers);
        if (!response.ok)
        {
            toast.error(response.data.error, { position: "top-right" });
            return
        }
        toast.success(response.data.messagee, { position: 'top-right' });
        values.comment = ''
        window.location.reload();
    }

    const {values,handleChange,handleSubmit}=useFormik({initialValues,onSubmit})
  return (
      <Container>
          <div className='d-flex flex-row'>
              <Input className='me-3' placeholder='Add Review' name='comment' onChange={handleChange} value={values.comment} />
              <Button onClick={handleSubmit}>Add</Button>
          </div>
      </Container>
  )
}
