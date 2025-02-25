import React from "react";
import AreaCard from "./AreaCard";
import location from "../assets/location.jpeg";
import daep from "../assets/Daip.png";
import neelawahn from "../assets/NeelaWahn.png";
import mazar from "../assets/Mazar.png";

export default function Areas() {
  return (
    <>
      <section class="journals" id="journals">
        <div class="section__container journals__container">
          <h2 class="section__header">The Hot Spots</h2>
          <p class="section__subheader">
            Visitors Have these as their favorites
          </p>
          <div class="journals__grid">
            <AreaCard
              name="De'ep Shareef"
              para="Daep Shareef is a waterfall and pond often used for swimming
                  by the locals."
              src={daep}
              location={location}
            />
            <AreaCard
              name="Neela Wahn"
              para="Neela Wahn is a stunning waterfall and popular swimming spot
                  in the heart of Soon Valley, Sakesar."
              src={neelawahn}
              location={location}
            />
            <AreaCard
              name="Hayat ul Meer"
              para="Hayat ul Meer is a revered shrine in Soon Valley, Sakesar,
                  known for its spiritual significance."
              src={mazar}
              location={location}
            />
          </div>
        </div>
      </section>
    </>
  );
}
