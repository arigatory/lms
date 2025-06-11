import Image from 'next/image';
import React from 'react';

export default function StarRating({ rating }) {
  const stars = new Array(rating).fill(0);
  return (
    <>
      {stars.map((_, i) => (
        <Image
          alt="Rating"
          key={i}
          src={`/assets/star.svg`}
          width={20}
          height={20}
        />
      ))}
    </>
  );
}
