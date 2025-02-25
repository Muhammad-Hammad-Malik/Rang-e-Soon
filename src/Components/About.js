import React from "react";
import aboutimg from "../assets/about.jpg";
export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="section__container about__container">
          <div className="about__content">
            <h2 className="section__header">About us</h2>
            <p className="section__subheader">
              Our mission is to put Soon Valley on every traveler’s map,
              unlocking the wonders of this untouched paradise. We are more than
              just a tour company; we are ambassadors of Soon Valley's beauty,
              curating experiences that invite you to explore its hidden
              treasures. With each itinerary, we blend adventure with the
              serenity of nature, creating journeys that thrill and inspire. Our
              team, fueled by a passion for discovery, is dedicated to
              showcasing the valley’s rich culture, diverse wildlife, and
              stunning landscapes. Join us, and together we’ll transform your
              travel dreams into unforgettable memories, as we lead the way in
              redefining tourism in Soon Valley.
            </p>
            <div className="about__flex">
              <div className="about__card">
                <h4>200+</h4>
                <p>Completed Trips</p>
              </div>
              <div className="about__card">
                <h4>11</h4>
                <p>Tour Guides</p>
              </div>
              <div className="about__card">
                <h4>25+</h4>
                <p>Destinations</p>
              </div>
            </div>
            <a href="#pricing">
              <button className="discover__btn">
                Read More <i className="ri-arrow-right-line"></i>
              </button>
            </a>
          </div>
          <div className="about__image">
            <img src={aboutimg} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
}
