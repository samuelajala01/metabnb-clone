import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="home-nav">
      <span>LOGO</span>
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
      <button className="purple connect-btn white-text">Connect Wallet</button>
    </nav>
  );
};

export default NavBar;
