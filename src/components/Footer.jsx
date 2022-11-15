import facebook from "../assets/Logos/facebook-logo.svg";
import twitter from "../assets/Logos/twitter-logo.svg";

const Footer = () => {
  return (
    <section className="footer-section">
      <footer>
        <div className="div">
          <h1>Metabnb</h1>
        </div>
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
      </footer>
      <div className="social-icons">
        <img src={facebook} /> <img src={twitter} />{" "}
      </div>
      <span>C 2022 Metabnb</span>
    </section>
  );
};

export default Footer;
