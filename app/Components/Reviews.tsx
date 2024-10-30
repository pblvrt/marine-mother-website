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
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile for a cleaner look
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-full p-4 lg:max-w-[700px] lg:p-8">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-2 h-full lg:p-4">
            <div className="bg-white p-4 h-full border shadow-lg rounded-lg lg:p-6">
              <p className="font-lato text-[#54595F] text-2xl text-center">{review.text}</p>
              <p className="text-right mt-2 image-box-description lg:mt-4">- {review.author}</p>
              <StarRating />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ReviewsCarousel;