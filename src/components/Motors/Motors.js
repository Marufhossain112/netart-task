import React from "react";
import "./Motors.css";
import img3 from "../../images/3.png";
const Motors = () => {
  return (
    <div className="motors">
      <div className="motor-pic">
        <img src={img3} alt="" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>
      <hr className="hr-style" />
      <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
      <p className="products">
        CHEMICALS & PROCESS <span className="span">|</span> POWER <span className="span">|</span> WATER & WASTE
        WATER <span className="span">|</span> OILS & GAS <span className="span">|</span> PHARMA
        <span className="span">|</span> SUGARS & DISTILLERIES <span className="span">|</span> PAPER & PULP{" "}
        <span className="span">|</span> MARINE & DEFENCE <span className="span">|</span> METAL & MINING{" "}
        <span className="span">|</span> FOOD & BEVERAGE PETROCHEMICAL & REFINERIES <span className="span">|</span>{" "}
        SOLAR <span className="span">|</span> BUILDING
        <span className="span">|</span> HVAC FIRE <span className="span">|</span> FIGHTING <span className="span">|</span>{" "}
        AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
};

export default Motors;
