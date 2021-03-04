import { NavBar } from ".";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="clearfix header-style5">
      <div className="logo-place">
        <div className="container">
          <div className="inner-logo-place">
            <Link to="/" className="navbar-brand">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
