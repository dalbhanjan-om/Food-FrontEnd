import React from 'react';

export default function CarouselItem({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center mx-4 sm:mx-6"> {/* Adjusted spacing */}
      <img
        className="w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] aspect-square rounded-full object-cover object-center"
        src={image}
        alt=""
      />
      <span className="py-3 sm:py-5 font-medium sm:font-semibold text-sm sm:text-lg md:text-xl text-gray-400">
        {title}
      </span>
    </div>
  );
}
