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
            I am Ranveer Kumar, a dedicated Data Science enthusiast with a strong foundation in mathematics and computer science. Proficient in Python, SQL, and a range of data analysis tools, I have hands-on experience in data cleaning, exploration, and applying machine learning algorithms.
With internships at Alphanumeric ideas, I've worked on diverse projects, from web scraping and predictive modeling to AI-driven business solutions. I've also developed end-to-end projects like a Movie Recommender System and Email Classification, showcasing my skills in libraries like Numpy, Pandas, and Sk-Learn. My passion for continuous learning is evident through certifications and participation in advanced programs.
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
