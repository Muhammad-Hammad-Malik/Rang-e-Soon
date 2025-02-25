import React from "react";

export default function PictureCard({ src, line1, line2 }) {
  return (
    <>
      <div class="gallery__card">
        <img src={src} alt="gallery" />
        <div class="gallery__content">
          <h4>{line1}</h4>
          <p>{line2}</p>
        </div>
      </div>
    </>
  );
}
