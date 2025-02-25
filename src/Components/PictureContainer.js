import React from "react";
import mountain from "../assets/Mountain.png";
import desert from "../assets/Desert.png";
import jheel from "../assets/Jheel.png";
import sodhi from "../assets/Sodhi.png";
import crops from "../assets/Crops.png";
import PictureCard from "../Components/PictureCard";
export default function PictureContainer() {
  return (
    <>
      <section class="gallery" id="gallery">
        <div class="gallery__container">
          <h2 class="section__header">Gallery photos</h2>
          <p class="section__subheader">Some of the clicks from our tours</p>
          <div class="gallery__grid">
            <PictureCard src={mountain} line1="Gousar" line2="Koradhi" />
            <PictureCard src={desert} line1="Kathwai" line2="Khushab" />
            <PictureCard src={jheel} line1="Jhalar" line2="Noushera" />
            <PictureCard src={sodhi} line1="Sodhi" line2="Mianwali" />
            <PictureCard src={crops} line1="Blasar" line2="Noushera" />
          </div>
        </div>
      </section>
    </>
  );
}
