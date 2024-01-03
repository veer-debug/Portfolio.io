import React from "react";
import "../components/navbar.css";
import Fade from "react-reveal/Fade";

export const Education = () => {
  return (
    <>
  
        <section id="education">
          <h1>Education</h1>
          <div className="ebag">
            <div className="edubox">
           

          

              <Fade left>
                <div>
                  <img
                    src="https://www.iifccms.edu.in/Image/ccsunive.jpg"
                    alt=""
                  />
                  <div className="ebox">
                    <h2>
                      BJMC - Bachelor of Journalism and Mass-Communication,CSS
                      University
                    </h2>
                    <h2>
                      <span>Aug 2018 - Nov 2021</span> | Noida , India
                    </h2>
                  </div>
                </div>
              </Fade>

              <Fade right>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div className="ebox">
                    <h2>Intermediate, RSB Inter School</h2>
                    <h2>
                      <span>Mar 2014 - Mar 2016</span> | Samastipur , Bihar
                    </h2>
                  </div>
                </div>
              </Fade>
            </div>

            <img
              className="eimg"
              src="https://freepngimg.com/thumb/education/10-2-education-download-png-thumb.png"
              alt=""
            />
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
     
    </>
  );
};
