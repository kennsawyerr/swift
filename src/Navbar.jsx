import { useState } from "react";

import menuImg from "./assets/menu.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      {/* {<ul className=" gap-20 flex ">} */}
      <nav>
        <div className=" flex">
          <div className="navigation">
            <div className="menu-btn">
              <img src={menuImg} onClick={toggleNavbar} alt="" />
            </div>

            <div className="show">
              <div className="logo-header">Sterling</div>
              <div className="logo-header_sub">FLIGHT BOOKING AGENCY</div>
            </div>
          </div>
          <ul className={`nav__menu ${collapse ? "collapse-nav" : ""}`}>
            <li className="">Support</li>
            <li className=""> Languages</li>

            <li className="margin-l">Sign up</li>
            <li className="">Sign in</li>

            <li>
              <NavLink to="/flights">Flights</NavLink>
            </li>
            <li className="show">Home</li>
            <li className="show">About</li>
            <li className="show">Offers</li>
            <li className="show">Seats</li>
            <li className="show">Destination</li>
          </ul>
        </div>
      </nav>

      <div className="container"></div>
    </>
  );
}
// at 1076 x 1128 . the screen is misbehaving and it appears that the width is on 805 without margins
export default Navbar;
