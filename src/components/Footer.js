import React, { useEffect } from "react";
import "./FooterStyles.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="top">
        <div data-aos="fade-up">
          <h1>Travel.</h1>
          <p>Choose Your Favourtie Destination</p>
        </div>
        <div data-aos="fade-up" className="tagDiv">
          <a href="/">
            <AiFillFacebook className="icon" />
          </a>
          <a href="/">
            <AiFillInstagram className="icon" />
          </a>
          <a href="/">
            <AiFillBehanceCircle className="icon" />
          </a>
          <a href="/">
            <AiFillTwitterSquare className="icon" />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/" className="icon">
            Changelog
          </a>
          <a href="/" className="icon">
            Status
          </a>
          <a href="/" className="icon">
            License
          </a>
          <a href="/" className="icon">
            All Versions
          </a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/" className="icon">
            Github
          </a>
          <a href="/" className="icon">
            Issues
          </a>
          <a href="/" className="icon">
            Project
          </a>
          <a href="/" className="icon">
            Twitter{" "}
          </a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/" className="icon">
            Support
          </a>
          <a href="/" className="icon">
            TroubleShooting
          </a>
          <a href="/" className="icon">
            Contact Us
          </a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/" className="icon">
            Terms of Service
          </a>
          <a href="/" className="icon">
            Privacy Policy
          </a>
          <a href="/" className="icon">
            License
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
