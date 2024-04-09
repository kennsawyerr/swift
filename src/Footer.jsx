import socialfb from "./assets/Fb.png";
import socialig from "./assets/Ig.png";
import socialtw from "./assets/Tw.png";
import socialln from "./assets/Ln.png";

const Footer = () => {
  return (
    <>
      <footer>
        <p className="p1">CONVINCED?</p>
        <h5>Lets travel the world together!</h5>
        <p className="p2">
          Let us unleash our creativity and expertise to create designs that
          deliver extraordinary results.
        </p>

        <button>Shoot us a DM</button>

        <div className="flex footer-last-elem">
          <div>
            <div className="logo-header white">Sterling</div>
            <div className="logo-header_sub white">FLIGHT BOOKING AGENCY</div>
          </div>
          <small> &#169; 2020 Rayna. All rights reserved</small>
          <ul className="social-m-icons">
            <li>
              <img src={socialfb} alt="" />
            </li>
            <li>
              <img src={socialtw} alt="" />
            </li>
            <li>
              <img src={socialig} alt="" />
            </li>
            <li>
              <img src={socialln} alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
