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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJL6jCbkv7X73FI_FifwK8eEFl63Qq9ttxrAlVdhXWHjyYbz3O8so5NVwGHdYVtLRYPA0&usqp=CAU"
                    alt=""
                  />
                  <div className="ebox">
                    <h2>
                    B.Tech in Computer Science/ SBSS-University
                    </h2>
                    <h2>
                      <span>Aug 2021 - Current</span> | Punjab , India
                    </h2>
                  </div>
                </div>
              </Fade>

              <Fade right>
                <div>
                  <img
                    src="https://lh6.googleusercontent.com/proxy/R1p5SAqEmXle_uSur3elbIHS291uoe9JsopMiLJFh10puWbSQy4C0zoUSBAxKtX9EBUoOwt20dTYQ9X5XpuFcknFDVGYdQ"
                    alt=""
                  />
                  <div className="ebox">
                    <h2>Intermediate, Sadhana Devi Vidyapith </h2>
                    <h2>
                      <span>Mar 2018 - Mar 2020</span> | Bihar , India
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
