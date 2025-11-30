import React from "react";
import hero1 from "../assets/Images/hero1.png";
import hero2 from "../assets/Images/hero2.png";
import hero3 from "../assets/Images/hero3.png";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <>
      <section className="hero">
        <img src={hero1} alt="Hero 1" className="hero-img-1" />
        <img src={hero2} alt="Hero 2" className="hero-img-2" />
        <img src={hero3} alt="Hero 3" className="hero-img-3" />

        <h1>Ignite your potential. Land your Dream Job</h1>
        <p>
          Blizzcode Academy empowers you with the skills and guidance to thrive
          in the Tech Industry
        </p>
        <div className="hero-btn">
          <button className="hero-btn-1">
            Get Started for Free <FaArrowRight style={{ marginRight: "8px" }} />
          </button>
          <button className="hero-btn-2">
            Continue Learning <FaArrowRight style={{ marginRight: "8px" }} />
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
