import React from "react";
import "./Footer.css";
import web from "../../images/web.png";
import fb from "../../images/facebook-circular-logo.png";
import phone from "../../images/phone-call.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <img
          style={{ height: "32px", width: "32px" }}
          src={phone}
          alt="web"
        ></img>{" "}
        Toll free 1800 200 1234
      </div>
      <div className="footer-text">
        <img style={{ height: "32px", width: "32px" }} src={fb} alt="web"></img>{" "}
        www.facebook.com/cripumps
      </div>
      <div className="footer-text">
        <img
          style={{ height: "32px", width: "32px" }}
          src={web}
          alt="web"
        ></img>{" "}
        www.crigroups.com
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
