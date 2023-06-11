import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import "./style.css";
const {
  nav,
  logo,
  menu,
  Current_requests,
  Previous_stays,
  Ongoing_stays,
  Report,
  btn
} = style;

const Navbar = () => {
  return (
    <>
      <div className={nav}>
        <div className={logo}>LODGN</div>
        <div className={menu}>
          <ul>
            <li>
              <NavLink to={"/"} className={Current_requests}>
                Current requests
              </NavLink>
            </li>
            <hr />

            <li>
              {" "}
              <NavLink to={"/ongoingstay"} className={Ongoing_stays}>
                Ongoing stays
              </NavLink>
            </li>
            <hr />

            <li>
              <NavLink to={"/previousstay"} className={Previous_stays}>
                Previous stays
              </NavLink>
            </li>
            <hr />

            <li>
              <NavLink to={"/report"} className={Report}>
                Reports
              </NavLink>
            </li>
            <hr />
          </ul>
        </div>
      
        <div style={{position:"relative",top:"100px",textAlign:"center"}}>
        <button className={btn}>
          Log - Out
        </button>
        <p>Help-Desk:</p>
        <p>
786-874 9988</p>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
