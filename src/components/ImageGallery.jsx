import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Klik om naar de volgende afbeelding te gaan
  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
<div
  onClick={handleClick}
  className="relative z-10 h-[80vh] w-full bg-cover bg-center transition-all duration-500 cursor-pointer"
  style={{ backgroundImage: `url(${images[currentIndex]})` }}
>
  {/* Geen tekst of extra elementen */}
</div>
  );
};

export default ImageGallery;
