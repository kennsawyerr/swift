import menuImg from "./assets/menu.png";
function Navbar() {
  return (
    <>
      <nav>
        <div className="container flex">
          <img src={menuImg} alt="" />
          <ul className=" gap-20 flex">
            <li>Support</li>
            <li>Languages</li>
          </ul>

          <ul className=" gap-20 flex">
            <li>Sign up</li>
            <li>Sign in</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
// at 1076 x 1128 . the screen is misbehaving and it appears that the width is on 805 without margins
export default Navbar;
