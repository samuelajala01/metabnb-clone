import facebook from "../assets/Logos/facebook-logo.svg";
import instagram from "../assets/Logos/instagram.png";
import twitter from "../assets/Logos/twitter-logo.svg";
import Metabnb from "../assets/Logos/metabnb-white.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <footer>
        <div className="logo-div">
          <img src={Metabnb} />
        </div>
        <div className="footer-container">
          <div className="div">
            <h4>Community</h4>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className="div">
            <h4>Places</h4>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div className="div">
            <h4>About us</h4>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
          </div>
        </div>
      </footer>
      <div className="footer-final">
        <div className="social-icons">
          <img src={facebook} /> <img src={instagram} /> <img src={twitter} />
        </div>
        <span>C 2022 Metabnb</span>
      </div>
    </section>
  );
};

export default Footer;
