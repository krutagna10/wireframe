import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  function handleToggleIsNavigationOpen() {
    setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
  }

  return (
    <header className="header container flex items-center justify-between">
      <Link to="/" className="header__link fs-400">
        Wireframe
      </Link>
      <nav className="header__nav">
        <ul
          id="header__nav-list"
          className="header__nav-list flex gap"
          data-visible={isNavigationOpen}
        >
          <li>
            <a href="#" className="header__nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="header__nav-link">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="header__nav-link">
              Cart
            </a>
          </li>
          <li>
            <a href="#" className="header__nav-link">
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="header__nav-toggle"
        aria-controls="header__nav-list"
        aria-expanded={isNavigationOpen}
        onClick={handleToggleIsNavigationOpen}
      >
        <span className="visually-hidden">Menu</span>
      </button>
    </header>
  );
}

export default Header;
