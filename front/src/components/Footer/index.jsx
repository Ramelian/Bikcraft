import { Link } from "react-router-dom";
import bike from "../../assets/icons/bikcraft.svg";
import facebook from "../../assets/svg/socials/facebook.svg";
import instagram from "../../assets/svg/socials/instagram.svg";
import youtube from "../../assets/svg/socials/youtube.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer container">
        <img src={bike} width="136" height="32" alt="Bikcraft" />
        <div className="footer-contacts">
          <h3 className="font-2-l-b color-0">Contato</h3>
          <ul className="font-2-m color-5">
            <li>
              <a>+55 21 9999-9999</a>
            </li>
            <li>
              <a>contato@bikcraft.com</a>
            </li>
            <li>Rua Ali Perto, 42 - Botafogo</li>
            <li>Rio de Janeiro - RJ</li>
          </ul>
          <div className="footer-socials">
            <a>
              <img src={instagram} width="32" height="32" alt="Instagram" />
            </a>
            <a>
              <img src={facebook} width="32" height="32" alt="Facebook" />
            </a>
            <a>
              <img src={youtube} width="32" height="32" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="footer-info">
          <h3 className="font-2-l-b color-0">Informações</h3>
          <nav>
            <ul className="font-1-m color-5">
              <li>
                <Link to="/catalog">
                  <a>Bicicletas</a>
                </Link>
              </li>
              <li>
                <Link to="/info">
                  <a>Seguros</a>
                </Link>
              </li>
              <li>
                <Link to="/contacts">
                  <a>Contato</a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <a>Termos e Condições</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="footer-copy font-2-m color-6">
          Bikcraft © Alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
