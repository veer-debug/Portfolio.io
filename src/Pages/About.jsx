import React from "react";
import "../components/navbar.css"
import Fade from "react-reveal/Fade";
import { I2 } from "./i2";
export const About = () => {
  return (
    <>
    <Fade left>
      <section id="about">
        <h1>About</h1>
        <div className="abag">
        
        <div className="aimg">
        <I2/>
        </div>
          <div className="text">
            <h3>
            Enthusiastic and innovative machine learning developer with hands-on
            experience in diverse frameworks like TensorFlow and PyTorch. 
            Specialized in creating impactful solutions for applications 
            such as image recognition and natural language processing. 
            Keen on staying abreast of cutting-edge technologies to drive advancements in AI. 
            Demonstrated commitment to excellence through successful projects.
            Eager to contribute this expertise and passion for innovation to a 
            forward-thinking organization, dedicated to collaborative growth.
            </h3>
          </div>
        </div>
        <div className="linediv">
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>

          <div className="d3"></div>
          <div className="d"></div>
          <div className="d"></div>
        </div>
      </section>
      </Fade>
    </>
  );
};
