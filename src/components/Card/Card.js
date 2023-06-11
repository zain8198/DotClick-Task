import React from "react";
import style from "./style.module.css";
import Vector from "../../Asset/Vector 1.png";

const { Card_wrapper, Card_Footer, btn, para, logo } = style;
const Card = ({ prop }) => {
  return (
    <>
      <div className={[Card_wrapper, prop ? "badge" : ""].join(" ")}>
        <div className={logo}>
          <img src={Vector} />
          <p>Holiday Inn</p>
        </div>
        <div className={Card_Footer}>
          <p className={para}>1.5 miles away from joblocation. </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>Singles: $120</p>
              <p>Doubles: $145</p>
            </div>
            <button className={btn}>Book now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
