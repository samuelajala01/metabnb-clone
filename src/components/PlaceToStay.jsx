// import Footer from "./Footer";
import ProductItem from "./ProductItem";
import Image1 from "../assets/Images/img-1.jpg";
import Image2 from "../assets/Images/img-2.jpg";
import Image3 from "../assets/Images/img-3.jpg";
import Image4 from "../assets/Images/img-4.jpg";
import Image5 from "../assets/Images/img-5.jpg";
import Image6 from "../assets/Images/img-6.jpg";
import Image7 from "../assets/Images/img-7.jpg";
import Image8 from "../assets/Images/img-8.jpg";
import Image11 from "../assets/Images/img-11.jpg";
import Image12 from "../assets/Images/img-12.jpg";
import Image13 from "../assets/Images/img-13.jpg";
import Image14 from "../assets/Images/img-14.jpg";
import Image15 from "../assets/Images/img-15.jpg";
import Image16 from "../assets/Images/img-16.jpg";
import Metabnb from "../assets/Logos/metabnb.svg";
import PlacesNavBar from "./PlacesNavBar";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useState } from "react";
import Metamask from "../assets/Logos/metamask-logo.png";
import WalletConnect from "../assets/Logos/wallet-connect.jpg";
import FilterLogo from "../assets/Logos/filter-icon.svg";

const PlaceToStay = () => {
  const [handleMobileNav, setHandleMobileNav] = useState(false);

  const productimages = [
    { src: Image1, name: "House 1" },
    { src: Image2, name: "House 2" },
    { src: Image3, name: "House 3" },
    { src: Image4, name: "House 4" },
    { src: Image5, name: "House 5" },
    { src: Image7, name: "House 6" },
    { src: Image6, name: "House 7" },
    { src: Image8, name: "House 8" },
    { src: Image11, name: "House 9" },
    { src: Image12, name: "House 10" },
    { src: Image13, name: "House 11" },
    { src: Image14, name: "House 12" },
    { src: Image15, name: "House 13" },
    { src: Image16, name: "House 14" },
    { src: Image12, name: "House 15" },
    { src: Image2, name: "House 16" },
  ];

  Modal.setAppElement("#root");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <nav className="home-nav">
        <img className="nav-logo" src={Metabnb} height="35" />
        <span className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/placetostay">
            Places
          </Link>
          <Link className="nav-link">NFTs</Link>
          <Link className="nav-link">Community</Link>
        </span>

        <div>
          <button
            className="purple connect-btn white-text"
            onClick={() => setModalIsOpen(true)}
          >
            Connect Wallet
          </button>
          <img
            className="mobile-nav-btn"
            src={FilterLogo}
            onClick={() => setHandleMobileNav(!handleMobileNav)}
          />
        </div>
      </nav>
      {handleMobileNav && (
        <>
          <div className="mobile-nav-links">
            <Link className="mobile-nav-link" to="/">
              Home
            </Link>
            <Link className="mobile-nav-link" to="/placetostay">
              Place to stay
            </Link>
            <Link className="mobile-nav-link">NFTs</Link>
            <Link className="mobile-nav-link">Community</Link>
          </div>
        </>
      )}
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
              <p className="wallet-name">
                <img src={Metamask} height="40" /> <span>Metamask</span>
              </p>
              <p className="wallet-click">&gt;</p>
            </div>
            <div className="wallet">
              <p className="wallet-name">
                <img src={WalletConnect} height="40" />
                <span>WalletConnect</span>
              </p>
              <p className="wallet-click">&gt;</p>
            </div>
          </div>
        </section>
      </Modal>
      <section className="places-section">
        <PlacesNavBar />
        <div className="product-container">
          {productimages.map((img) => {
            return <ProductItem key={img.name} src={img.src} />;
          })}
        </div>
      </section>
    </>
  );
};

export default PlaceToStay;
