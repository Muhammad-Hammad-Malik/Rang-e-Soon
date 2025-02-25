import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav__bar">
          <div className="nav__logo">
            <a href="#">Rang-e-Soon</a>
          </div>
          <ul className="nav__links">
            <li className="link">
              <a href="#home">Home</a>
            </li>
            <li className="link">
              <a href="#about">About Us</a>
            </li>
            <li className="link">
              <a href="#discover">Discover</a>
            </li>
            <li className="link">
              <a href="#journals">Areas</a>
            </li>
            <li className="link">
              <a href="#blog">Food</a>
            </li>
            <li className="link">
              <a href="#gallery">Pictures</a>
            </li>
            <li className="link">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="link">
              <a href="#contact">Contact</a>
            </li>
            <li className="link search">
              <span>
                <a
                  className="link"
                  href="https://www.google.com/maps/place/Soon+Valley+Khushab/@32.6087764,72.3900476,17z/data=!3m1!4b1!4m6!3m5!1s0x3920e180bf62f765:0xc321259cca05c2e8!8m2!3d32.6087764!4d72.3926225!16s%2Fg%2F11l3st7fgz!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-map-pin-4-line"></i>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
