import React from "react";
import "./Prize.css";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
const Prize = () => {
  return (
    <div>
      <div className="awards">
        {/* img */}
        <div className="left-side-awards">
          <img src={img1} alt="" />
        </div>
        <div className="right-side-awards">
          <h5>
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <div className="national-award">
            <ul>
              <li>
                {" "}
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                {" "}
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={img2} alt="" />
            <p>
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b> . Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <p className="install">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </p>
    </div>
  );
};

export default Prize;
