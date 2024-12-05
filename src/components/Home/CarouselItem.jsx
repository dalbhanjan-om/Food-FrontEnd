import React from 'react';

export default function CarouselItem({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center mx-6"> {/* Added mx-4 for spacing */}
      <img
        className="w-[10rem] lg:w-[14rem] aspect-square rounded-full object-cover object-center"
        src={image}
        alt=""
      />
      <span className="py-5 font-semibold text-xl text-gray-400">
        {title}
      </span>
    </div>
  );
}
