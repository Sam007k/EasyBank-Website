import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar-container">
      <navbar className="navbar">
        <img src="/images/logo.svg" alt="logo" />
        <ul className={click ? "nav active" : "nav"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
        <Link to="/">
          <button className="btn-invite">Request Invite</button>
        </Link>
        <button className="btn-hamburger" onClick={handleClick}>
          <img src="./images/icon-hamburger.svg" alt="hamburger" />
        </button>
      </navbar>
    </div>
  );
};

export default Navbar;
