import i18next from 'i18next';
import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';
import { toast } from 'react-toastify';

import ProductDetails from './ProductDetail'
import Reviews from './Reviews'
import { ACNetwork, Urls, config } from '../../config';
import Avatar from '../../assets/avatar.png'


export default function ProductDetail() {
  const [reviews, setReviews] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  useEffect(() => { 
    GetReviews();
  }, []);

  const GetReviews = async (pageNo) => {
    const response = await ACNetwork.get(
        Urls.getReviews(i18next.language) + location.state.id + `?page=${pageNo}&limit=5`,
        (
            await config()
        ).headers
    );
    setReviews([...reviews,...response.data.reviewsData]);
    setTotalPages(response.data.totalpages);


  }

  const DeletReview = async(id) => {
    const newArray = reviews.filter((review) => review._id != id);
    setReviews(newArray);

    const response = await ACNetwork.delete(Urls.deleteReview + id, {}, (await config()).headers);
    if (!response.ok) {
      return toast.error(response.data.error, { position: "top-right" });
    }

  }
  return (
      <>
          <ProductDetails />
          <Container>
              <Row>
                  <Col lg={6} sm={12}>
            <Reviews productId={location.state.id} setReviews={setReviews} reviees={reviews} />
                  </Col>
                  <Col lg={6} sm={12}>
                      <h5>Top reviews from the customers</h5>
                      {reviews?.map((review) => {
                          return (
                              <div key={review._id} className='mt-4'>
                                  <img
                                      src={Avatar}
                                      className='rounded-circle'
                                      style={{ width: '35px' }}
                                      alt='Avatar'
                                  />
                                  <span className='ms-2'> {review.customer}</span>
                              <p className='fw-bolder'>{review.comment}</p>
                              <div className='text-danger' style={{ cursor: "pointer" }} onClick={()=>DeletReview(review._id)}>
                                Delete
                                </div>
                              </div>
                          );
                      })}
                      {pageNo < totalPages && (
                          <div>
                              <hr />
                <h6 onClick={() => {
                  GetReviews(pageNo + 1)
                  setPageNo(pageNo + 1)
                }
                }>Showmore</h6>
                          </div>
                      )}
                  </Col>
              </Row>
          </Container>
      </>
  );
}
