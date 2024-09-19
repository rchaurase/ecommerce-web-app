import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up on unmount
    };
  }, [images]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Slider Images */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        {images.map((image :any, index:any) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`w-full transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? 'transform translate-x-0'
                : 'transform translate-x-full'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_:any, index:any) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
