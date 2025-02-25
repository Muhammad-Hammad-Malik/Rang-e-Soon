import React from "react";
import littleVillage from "../assets/LittleVillage.jpg";
import valleyInn from "../assets/ValleyInn.jpg";
import villageInn from "../assets/VillageInn.jpg";
import redOnion from "../assets/RedOnion.jpg";
import FoodCard from "./FoodCard";

export default function FoodContainer() {
  return (
    <>
      <section class="blogs" id="blog">
        <div class="blogs__container">
          <h2 class="section__header">The Food Scene</h2>
          <p class="section__subheader">This is where the good stuff's at</p>
          <div class="blogs__grid">
            <FoodCard
              src={littleVillage}
              para="Little Village is a popular choice among travellers that like
                Desi cusin"
            />
            <FoodCard
              src={valleyInn}
              para="The oldest resturant in the valley, Valley Inn hotel is famous
                for its BBQ."
            />

            <FoodCard
              src={villageInn}
              para="Village Inn introduced fast food to the valley for the first
                time."
            />
            <FoodCard
              src={redOnion}
              para="Red Onion is a familiar sight for all pakistani travellers."
            />
          </div>
        </div>
      </section>
    </>
  );
}
