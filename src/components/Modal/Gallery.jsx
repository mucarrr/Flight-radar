import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Gallery = ({ data }) => {
  const key = data?.large
    ? data.large
    : data?.medium
    ? data.medium
    : data.thumbnails;
  return (
    <div className="gallery">
      {key?.length > 0 ? (
        <Splide aria-label="My Favorite Images">
          {key.map((i, key) => (
            <SplideSlide key={key}>
              <img src={i.src} alt="Image" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">
          <p>Images not found</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
