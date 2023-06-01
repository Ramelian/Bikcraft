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
              <div className="li-item">+55 21 9999-9999</div>
            </li>
            <li>
              <div className="li-item">contato@bikcraft.com</div>
            </li>
            <li>Rua Ali Perto, 42 - Botafogo</li>
            <li>Rio de Janeiro - RJ</li>
          </ul>
          <div className="footer-socials">
            <div className="li-item">
              <img src={instagram} width="32" height="32" alt="Instagram" />
            </div>
            <div className="li-item">
              <img src={facebook} width="32" height="32" alt="Facebook" />
            </div>
            <div className="li-item">
              <img src={youtube} width="32" height="32" alt="Youtube" />
            </div>
          </div>
        </div>
        <div className="footer-info">
          <h3 className="font-2-l-b color-0">Informações</h3>
          <nav>
            <ul className="font-1-m color-5">
              <li>
                <Link to="/catalog">
                  <div className="li-item">Bicicletas</div>
                </Link>
              </li>
              <li>
                <Link to="/info">
                  <div className="li-item">Seguros</div>
                </Link>
              </li>
              <li>
                <Link to="/contacts">
                  <div className="li-item">Contato</div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="li-item">Termos e Condições</div>
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
