import { useState } from "react";

import menuImg from "./assets/menu.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [collapse, setCollapse] = useState(true);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };
  const [messages, setMessages] = useState(false);

  const comingSoon = () => {
    toggleNavbar();
    setMessages(true);
    setTimeout(() => {
      setMessages(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <>
      <nav>
        <div className="comingsoon-msg">
          {messages && <h3>Coming soon.. no worry</h3>}
        </div>
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
            <li onClick={toggleNavbar} className="marginal">
              Support
            </li>
            <li onClick={toggleNavbar} className="marginal-right">
              {" "}
              Languages
            </li>

            <li onClick={toggleNavbar} className="margin-l">
              Sign up
            </li>
            <li onClick={toggleNavbar} className="">
              Sign in
            </li>

            <li className="show">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={toggleNavbar} className="show">
              About
            </li>
            <li onClick={toggleNavbar} className="show">
              Offers
            </li>
            <li className="show" onClick={comingSoon}>
              Seats
            </li>
            <li onClick={toggleNavbar} className="show">
              Destination
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
// at 1076 x 1128 . the screen is misbehaving and it appears that the width is on 805 without margins
export default Navbar;
