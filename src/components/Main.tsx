import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '@/assets/styles/Main.scss';
import Image from "next/image";
import avatar from '@/assets/images/avatar.png'

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <Image src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/TigranZakharyan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tigran-zakharyan-b80337212" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tigran Zakharyan</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/TigranZakharyan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tigran-zakharyan-b80337212" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;