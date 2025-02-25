import React from "react";

export default function DiscoverCard({ name, para, src }) {
  return (
    <div className="discover__card">
      <div className="discover__image">
        <img src={src} alt="discover" />
      </div>
      <div className="discover__card__content">
        <h4>{name}</h4>
        <p>{para}</p>
        <a href="#journals">
          <button className="discover__btn">
            Discover More <i className="ri-arrow-right-line"></i>
          </button>
        </a>
      </div>
    </div>
  );
}
