import React from "react";
import style from "./style.module.css";
import Card from "../../components/Card/Card";
import message from "../../Asset/Frame.png";
import HospitalDetail from "../../components/HospitalDetail/HospitalDetail";
const {
  container,
  wrapper,
  menu,
  logo,
  header,
  btn,
  RECEIVED,
  NEGOTIATING,
  COMPLETED,
} = style;
const CurrrentRequest = () => {
  return (
    <>
      <div className={container}>
        <h1 style={{ color: "#48AF78", marginBottom: "30px" }}>
          You currently have 3 requests
        </h1>
        <div className={header}>
          <HospitalDetail />
          <div className={menu}>
            <div className={RECEIVED}>RECEIVED</div>
            <div className={NEGOTIATING}>NEGOTIATING</div>
            <div className={COMPLETED}>COMPLETED</div>
          </div>
        </div>
        <div className={wrapper}>
          <HospitalDetail />
          <button className={btn}>Completed</button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card prop={true} /> <Card /> <Card />
          </div>
        </div>
        <div className={logo}>
          <img src={message} />
        </div>
      </div>
    </>
  );
};

export default CurrrentRequest;
