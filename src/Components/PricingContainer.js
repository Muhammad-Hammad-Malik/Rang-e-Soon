import React from "react";
import PricingCard from "./PricingCard";

export default function PricingContainer() {
  return (
    <>
      <section class="price_container_main" id="pricing">
        <section class="pricing__container section__container">
          <h2 class="section__header">Our Pricing Plans</h2>
          <div class="pricing__grid">
            <PricingCard
              name="Basic Trip"
              price={6500}
              line1="Same day trip"
              line2="Breakfast and Lunch included"
              line3="Pickup from Lahore"
              line4="Uchali,Khabeki and Kanhatti covered"
            />
            <PricingCard
              name="Deluxe Trip"
              price={13000}
              line1="1 Night stay"
              line2="Breakfast Lunch and Dinner Included"
              line3="Pickup from Lahore"
              line4="Uchali,Khabeki,Kanhatti,Da'ep,Gousar covered"
            />
            <PricingCard
              name="Platinum Trip"
              price={20000}
              line1="2 Nights Stay"
              line2="Breakfast Lunch and Dinner Included"
              line3="Pickup from Lahore and Islamabad"
              line4="Entire Valley covered"
            />
          </div>
        </section>
      </section>
    </>
  );
}
