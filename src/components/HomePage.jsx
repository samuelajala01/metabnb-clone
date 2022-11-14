import InspirationSection from "./InspirationSection";
import NftSection from "./nftSection";
import Metamask from "../assets/Logos/Group 4040.png";
import Opensea from "../assets/Logos/Frame 4041.png";
import MbToken from "../assets/Logos/Group 59537.png";

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-tagline">
            <h1>
              Rent a <span className="purple-text">Place </span>
              away from <span className="purple-text">Home </span>in the
              <span className="purple-text"> Metaverse</span>
            </h1>
            <p className="hero-description">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
            <div className="hero-search">
              <input type="search" placeholder="Search for email" />
              <button className="purple white-text">Search</button>
            </div>
          </div>
          <div className="hero-img-container">Images</div>
        </div>

        <div className="purple ad">
          <img src={MbToken} height="40" />

          <img src={Metamask} height="40" />

          <img src={Opensea} height="40" />
        </div>
      </section>
      <InspirationSection />
      <NftSection />
    </>
  );
};

export default HomePage;
