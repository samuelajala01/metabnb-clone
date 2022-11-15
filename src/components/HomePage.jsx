import InspirationSection from "./InspirationSection";
import NftSection from "./NftSection";
import Metamask from "../assets/Logos/Group 4040.png";
import Opensea from "../assets/Logos/Frame 4041.png";
import MbToken from "../assets/Logos/Group 59537.png";
import HeroImg from "../assets/Images/hero-img.jpg";
import AdImg from "../assets/Images/ad-img.png";
import { Link } from "react-router-dom";
import Metabnb from "../assets/Logos/metabnb.svg";
import Modal from "react-modal";
import { useState } from "react";
// import ModalContent from "./ModalContent";

Modal.setAppElement("#root");

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <nav className="home-nav">
        <img src={Metabnb} height="50" />
        <span className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/placetostay">
            Place to stay
          </Link>
          <Link className="nav-link">NFTs</Link>
          <Link className="nav-link">Community</Link>
        </span>
        <button
          className="purple connect-btn white-text"
          onClick={() => setModalIsOpen(true)}
        >
          Connect Wallet
        </button>
      </nav>

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
          <div className="hero-img-container">
            <img src={HeroImg} />
          </div>
        </div>

        <img className="ad" src={AdImg} />
      </section>
      <InspirationSection />
      <NftSection />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            margin: "auto",
          },
          content: {
            margin: "auto",
            maxWidth: "30rem",
            height: "fit-content",
            borderRadius: "1rem",
            padding: "0",
          },
        }}
      >
        <section className="modal-box">
          <div className="connect-wallet-div">
            <p className="modal-title">Connect Wallet</p>
            <p className="modal-close" onClick={() => setModalIsOpen(false)}>
              X
            </p>
          </div>
          <p className="choose-wallet-text">Choose your preferred wallet</p>
          <div className="select-wallet-div">
            <div className="wallet">
              <p className="wallet-name">Metamask</p>
              <p>V</p>
            </div>
            <div className="wallet">
              <p className="wallet-name">WalletConnect</p>
              <p>V</p>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default HomePage;
