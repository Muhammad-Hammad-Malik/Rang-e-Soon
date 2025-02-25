import React from "react";

export default function AreaCard({ name, para, src, location }) {
  return (
    <>
      <div class="journals__card">
        <img src={src} alt="journal" />
        <div class="journals__content">
          <div class="journals__author">
            <img src={location} alt="author" />
            <h4 class="location_heading">{name}</h4>
          </div>
          <p>{para}</p>
          <br />
          <div class="journals__footer">
            <span>
              <a
                class="location_logo"
                href="https://www.google.com/maps/dir//Daep+Sharif+chashma+1+Daep+Sharif,+Soon+Sakesar+Valley,+2.5+Kms+inside+on+a+branch+road+from+Khushab-Sakesar+Road./@32.5313301,72.0762355,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3920d65eb422e49f:0x68a41926dc676541"
                target="_blank"
              >
                <i class="ri-map-pin-fill location_logo"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
