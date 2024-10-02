import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: 'image1.jpg', alt: 'Chess Event 1' },
  { src: 'image2.jpg', alt: 'Chess Event 2' },
  { src: 'image3.jpg', alt: 'Chess Training Session' },
  { src: 'image4.jpg', alt: 'Tournament Final' },
  { src: 'image5.jpg', alt: 'Chess Club Meetup' },
];

function Gallery() {
  const [index, setIndex] = useState(-1); // Lightbox open state: -1 means closed

  const openLightbox = (idx) => {
    setIndex(idx); // Set index of clicked image
  };

  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
        <p className="mt-2 text-lg text-gray-600">Explore the moments captured during our academy events.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover cursor-pointer"
              onClick={() => openLightbox(idx)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold text-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0} // Open the lightbox if index is set
        index={index}
        close={() => setIndex(-1)} // Close lightbox
        slides={slides} // Array of images for lightbox
      />
    </div>
  );
}

export default Gallery;
