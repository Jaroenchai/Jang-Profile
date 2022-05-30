import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <p className="Jang">Jaroenchai Saejang</p>
      <Link className="header-nav" to="/">
        Profile
      </Link>
      <Link className="header-nav" to="/About">
        About
      </Link>
    </header>
  );
}

export default Header;
