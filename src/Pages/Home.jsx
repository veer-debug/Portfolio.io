import React from "react";
import Typical from "react-typical";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from "react-reveal/Fade";
import "../components/navbar.css";
import { Button, Image } from "@chakra-ui/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import DownloadIcon from '@mui/icons-material/Download';
 
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Img from "../utils/prifile.png";
export const Home = () => {
  return (
    <div>
      <Fade top>
        <section id="home">
          <div className="profile">
            <div className="nleft">
            <Image src={Img}/>

              <h1 className="intro">
              Data science: Turning possibilities into realities with insights.
              </h1>
            </div>

            <div className="nright">
              <span class="wave">👋</span>

              <div className="detail_name">
                <span className="primary_text">
                  Hello, I'M{" "}
                  <span className="highlight_text">Ranveer Kumar</span>
                </span>
              </div>
              <div className="profile_detail_role">
                <span className="primary_text">
                  <h1>
                    <Typical
                      className="tt"
                      loop={Infinity}
                      steps={[
                        "Ethusiastic Developer ",
                        3000,
                        "Turning data into decisions",
                        3000,
                        "Data Science",
                        3000,
                        "ML-Devloper",
                        3000,
                      ]}
                    />
                  </h1>
                </span>
              </div>

              <Button _hover={{bg:"teal"}}>
                <a href="https://drive.google.com/file/d/1n-o81wn7DLC1eGfUKjJb3DqKl5eNlGKs/view?usp=drive_link" target="_blank"><DownloadIcon/></a>
              </Button>
              <Button _hover={{bg:"teal"}}>
                <a href="tel:7033882318" target="_blank"><CallIcon/></a>
              </Button>
            </div>
          </div>
          <div className="linkdin">
            <Button _hover={{bg:"teal"}}>

              <a href="https://github.com/veer-debug" target="_blank"><GitHubIcon/></a>
            </Button>
            <Button _hover={{bg:"teal"}} className="linkdinid">
              <a href="https://www.linkedin.com/in/ranveer-kumar-12050a247/" target="_blank"><LinkedInIcon/></a>
              </Button>
          </div>
          <div className="icone">
            <a href="20211468@sbsstc.ac.in">
         
            <EmailIcon fontSize="medium" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100021945492319" target="_blank">
            <FacebookIcon fontSize="medium" />
          </a>
        
          <a href="https://api.whatsapp.com/send?phone=7033882318" target="_blank"> 
            {" "}
            <WhatsAppIcon fontSize="medium" />
          </a>
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
    </div>
  );
};
