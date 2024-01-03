import React from 'react'
import GitCalender from './gitStatus'
import { Slider } from './slider'
import "../components/navbar.css";
import Fade from "react-reveal/Fade";
import { Tool } from './Tool';
export const Skill = () => {
  return (
    <>
    
         <section id="skill">
            <h1>Skill</h1>
          
              <Slider />
            
              {/* <Tool/> */}

            {/* <GitCalender/> */}
          
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
  )
}
