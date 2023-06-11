import React from "react";
import style from "./style.module.css";

const { container } = style;
const HospitalDetail = () => {
  return (
    <>
      <div className={container}>
        <div>
          <h1>St Judes Hospital </h1>
          <p>Sarasota,FL. 33178</p>
        </div>
        <div
          style={{
            borderRight: "1px solid #959595",
            borderLeft: "1px solid #959595",
            padding: "0 20px 0 20px",
          }}
        >
          <h1>10 - 17</h1>
          <p>October December</p>
        </div>
        <div>
          <h1>20 Rooms</h1>
          <p>10 Singles, 10 doubles</p>
        </div>
      </div>
    </>
  );
};

export default HospitalDetail;
