import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageGallery() {
  return (
    <section className="image-gallery-section">
      <div className="gallery-header">
        <h3 className="blizz-b-950">Image Gallery</h3>
        <p className="neutral-500">
          A selection of moments captured from our community events.
        </p>
      </div>

      <div className="gallery-wrapper">
        <button className="gallery-arrow left" aria-label="prev">
          <FaChevronLeft />
        </button>
        <div className="gallery-image">
          {/* Using a placeholder image; replace with project assets if you want */}
          <img
            src="https://via.placeholder.com/900x320.png?text=Community+Gallery"
            alt="Community"
          />
        </div>
        <button className="gallery-arrow right" aria-label="next">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default ImageGallery;
