import React from "react";

export default function FoodCard({ para, src }) {
  return (
    <>
      <div class="blogs__card">
        <img src={src} alt="blog" />
        <div class="blogs__content">{para}</div>
      </div>
    </>
  );
}
