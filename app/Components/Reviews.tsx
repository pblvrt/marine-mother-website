"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from './StartReviews';

interface Review {
  author: string;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
 const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className="mx-auto lg:max-w-[700px] p-8">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4  h-full">
            <div className="bg-white p-6 h-full border shadow-lg rounded-lg">
              <p className="image-box-description text-center ">{review.text}</p>
              <p className="text-right mt-4 image-box-description">- {review.author}</p>
              <StarRating />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;