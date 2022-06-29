import React from 'react'
import {Row,Col,Button} from 'reactstrap';
import NavRoutes from '../../common/NavRoutes';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Bill({totalPrice}) {
  let navigate = useNavigate();
   const handleOrder = () => {
       navigate(NavRoutes.Order);
    };
    const { t } = useTranslation(['Cart']);
  return (
      <>
          <h4>{t('orderdetails')}</h4>
          <hr />
          <Row>
              <Col sm={6}>{t('subtotal')}</Col>
              <Col sm={6} style={{ textAlign: 'right' }}>
                  Rs{totalPrice}
              </Col>
          </Row>
          <hr />
          <Row>
              <Col sm={6}>{t('total') }</Col>
              <Col sm={6} style={{ textAlign: 'right' }}>
                  Rs{totalPrice}
              </Col>
          </Row>
          <div className='text-center mt-5'>
              <Button
                  onClick={() => {
                      handleOrder();
                  }}
                  className='amazon-btn'
              >
                  {t('proceed')}
              </Button>
          </div>
      </>
  );
}
