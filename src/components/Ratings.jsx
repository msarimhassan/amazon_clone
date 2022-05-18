import React from 'react';
import ReactStars from 'react-stars';

const Ratings = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return <ReactStars count={5} onChange={ratingChanged} size={20} color2={'#ffd700'} />;
};

export default Ratings;
