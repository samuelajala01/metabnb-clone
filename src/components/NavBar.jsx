import { Link } from "react-router-dom";
import MbToken from "../assets/Logos/Group 59537.png";

const NavBar = () => {
  // const handleModal = () => {

  // }

  return (
    <nav className="home-nav">
      <img src={MbToken} height="50" className="purple" />{" "}
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
      <button className="purple connect-btn white-text">
        <a href="/">Connect Wallet</a>
      </button>
    </nav>
  );
};

export default NavBar;