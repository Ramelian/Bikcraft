import "./Header.css";
import Logo from "../../assets/icons/bikcraft.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ mobile }) => {
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
    document.body.style.overflow =
      navRef.current.classList.value === "active" && mobile ? "hidden" : "auto";
  };

  return (
    <header className="header-bg">
      <div className="header container">
        <Link to="./">
          <img src={Logo} width="136" height="32" alt="Bikcraft" />
        </Link>
        <nav ref={navRef} area-label="preview-main">
          <ul
            className={`header-menu ${
              navRef?.current?.className === "active" && mobile
                ? "font-1-l"
                : "font-1-m"
            } color-0`}
          >
            <li>
              <Link onClick={showNavbar} to="/catalog">
                Bicycles
              </Link>
            </li>
            <li>
              <Link onClick={showNavbar} to="/info">
                Seguros
              </Link>
            </li>
            <li>
              <Link onClick={showNavbar} to="/contacts">
                Contact
              </Link>
            </li>
          </ul>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};
export default Header;
