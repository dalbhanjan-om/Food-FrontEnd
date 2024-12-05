import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeals } from './topMeals';
import CarouselItem from './CarouselItem';

export default function MultiItemCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to 1 for mobile
    responsive: [
      {
        breakpoint: 640, // Mobile breakpoint
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768, // Tablet breakpoint
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // Desktop breakpoint
        settings: { slidesToShow: 5 },
      },
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="px-4 sm:px-8 lg:px-12"> {/* Added padding for responsiveness */}
      <Slider {...settings}>
        {topMeals.map((item) => (
          <CarouselItem key={item.title} image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
}
