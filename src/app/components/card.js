import Image from 'next/image';
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <Image src={imageUrl} alt={title} className="w-full h-56 object-cover mb-4 rounded-md" width={100} height={100}/>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
