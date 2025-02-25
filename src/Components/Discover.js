import React from "react";
import DiscoverCard from "./DiscoverCard";
import Uchali from "../assets/Uchali1.png";
import Khabeki1 from "../assets/Khabeki.png";
import Kanhatti from "../assets/Kanhatti.png";

export default function Discover() {
  return (
    <>
      <section className="discover" id="discover">
        <div className="section__container discover__container">
          <h2 className="section__header">Discover the Valley</h2>
          <p className="section__subheader">
            Experience the magic of Soon Valley with us—bring your family and
            create memories that will last a lifetime.
          </p>
          <div className="discover__grid">
            <DiscoverCard
              name="Uchali"
              para="Discover the serene beauty of Uchali Lake, where tranquil waters and stunning landscapes create a surreal and peaceful escape."
              src={Uchali}
            />
            <DiscoverCard
              name="Khabeki"
              para="From serene boating to sunset strolls along its shores,
                  Khabeki Lake invites nature lovers to immerse themselves in
                  its tranquil beauty."
              src={Khabeki1}
            />
            <DiscoverCard
              name="Kanhatti Garden"
              para="From scenic hikes to exploring its rolling hills, Kanhatti
                  Garden invites adventurers to immerse themselves in its
                  untouched natural beauty."
              src={Kanhatti}
            />
          </div>
        </div>
      </section>
    </>
  );
}
