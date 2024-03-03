import React from "react";
import { AllRights, ContainerFoot } from "./footerStyl";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <ContainerFoot>
        <div>
          <h1 style={{ color: " #4348DB", font: "45px", }}>
            Jobify
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet lorem. </p>
        </div>
        <div>
          <h1>Serach for jobs</h1>
          <p>All Jobs</p>
          <p>Inernship</p>
          <p>Full time</p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "star",
              alignItems: "center",
              gap: "20px",
              cursor: "pointer",
            }}
          >
            <InstagramIcon />
            <p>Instagram</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "20px",
              cursor: "pointer",
            }}
          >
            <XIcon />
            <p>Twitter</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "20px",
              cursor: "pointer",
            }}
          >
            <YouTubeIcon />
            <p>You Tube</p>
          </div>
        </div>
      </ContainerFoot>
      <AllRights>
        <h3>Jobify</h3>
        <p>© 2024 All rights reserved</p>

      </AllRights>
    </div>
  );
};

export default Footer;
