import React from "react";
import "./Footer.css";
import web from "../../images/web.png";
import fb from "../../images/facebook-circular-logo.png";
import phone from "../../images/phone-call.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <FaPhoneAlt className="icon"></FaPhoneAlt>
        <p>Toll free 1800 200 1234</p>
      </div>
      <div className="footer-text">
        <FaFacebookF className="icon"></FaFacebookF>
        <p>www.facebook.com/cripumps</p>
      </div>
      <div className="footer-text">
        <SlGlobe style={{ fontSize: "26px" }}></SlGlobe>
        <p>www.crigroups.com</p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
