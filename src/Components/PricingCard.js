import React from "react";

export default function PricingCard({
  name,
  price,
  line1,
  line2,
  line3,
  line4,
}) {
  return (
    <>
      <div class="pricing__card">
        <h3 class="pricing__title">{name}</h3>
        <p class="pricing__price">PKR {price}/-</p>
        <ul class="pricing__features">
          <li>{line1}</li>
          <li>{line2}</li>
          <li>{line3}</li>
          <li>{line4}</li>
        </ul>
        <a href="#contact">
          <button class="btn">Choose Plan</button>
        </a>
      </div>
    </>
  );
}
