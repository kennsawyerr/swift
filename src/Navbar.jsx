import { useState } from "react";

import menuImg from "./assets/menu.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };

  const comingSoon = () => {
    alert("Coming soon");
  };
  return (
    <>
      {/* {<ul className=" gap-20 flex ">} */}
      <nav>
        <div className=" flex">
          <div className=" container navigation">
            <div className="menu-btn">
              <img src={menuImg} className="" onClick={toggleNavbar} alt="" />
            </div>

            <div className="show">
              <div className="logo-header-mini">
                <NavLink to="/" className="nav-link">
                  Sterling
                </NavLink>
              </div>
              <div className="logo-header_sub-mini">FLIGHT BOOKING AGENCY</div>
            </div>
          </div>
          <ul className={`nav__menu ${collapse ? "collapse-nav" : ""}`}>
            <li className="marginal">Support</li>
            <li className="marginal-right"> Languages</li>

            <li className="margin-l">Sign up</li>
            <li className="">Sign in</li>

            <li>
              <NavLink to="/flights">Flights</NavLink>
            </li>
            <li className="show">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="show">About</li>
            <li className="show">Offers</li>
            <li className="show" onClick={comingSoon}>
              Seats
            </li>
            <li className="show">Destination</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
// at 1076 x 1128 . the screen is misbehaving and it appears that the width is on 805 without margins
export default Navbar;
