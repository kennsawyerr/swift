import { useState } from "react";
import menuImg from "./assets/menu.png";

function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      {/* {<ul className=" gap-20 flex ">} */}
      <nav>
        <div className="container flex">
          <div className="menu-btn">
            <img src={menuImg} onClick={toggleNavbar} alt="" />
          </div>
          <ul className={`nav__menu ${collapse ? "collapse-nav" : ""}`}>
            <li className="">Support</li>
            <li className=""> Languages</li>

            <li className="">Sign up</li>
            <li className="">Sign in</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
// at 1076 x 1128 . the screen is misbehaving and it appears that the width is on 805 without margins
export default Navbar;
