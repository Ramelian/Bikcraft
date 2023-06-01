import {
  bikeimg,
  target,
  speed,
  material,
} from "../../assets/svg";
import "./Catalog.scss";
import { Title } from "../../components";
import { useContext } from "react";
import { BikesContext } from "../../Context";
import { Link } from "react-router-dom";
const Catalog = () => {
  const { bikes} = useContext(BikesContext);

  return (
    <>
      <Title title="nossas bicicletas" text="Escolha a melhor para você" />

      {bikes.map((bike, index) => {
        return (
          <div
            className={`${index === 1 && "bike-bg fadeInDown"}`}
            data-anime="100"
            key={index}
          >
            <div className="bike container fadeInRight" data-anime="200">
              <div className="bike-img">
                <img
                  src={`https://bikcraft.onrender.com/uploads/${bike.imgUrl}`}
                  alt="Bicicleta"
                />
                <span className="font-2-m color-0 fadeInLeft" data-anime="300">
                  R$ {bike.price}
                </span>
              </div>
              <div className="bike-content">
                <h2
                  className={`font-1-xl ${index === 1 && "color-0"} fadeInDown`}
                  data-anime="300"
                >
                  {bike.name}
                </h2>
                <p
                  className={`font-2-s ${
                    index === 1 ? "color-0" : "color-8"
                  }  fadeInUp`}
                  data-anime="400"
                >
                  A Nimbus Stark é a melhor Bikcraft já criada pela nossa
                  equipe. Ela vem equipada com os melhores acessórios, o que
                  garante maior velocidade.
                </p>
                <ul
                  className={`font-1-m  ${index === 1 ? "color-0" : "color-8"}`}
                >
                  <li className="fadeInDown" data-anime="500">
                    <img src={bikeimg} alt="" />
                    Motor {bike.motor}
                  </li>
                  <li className="fadeInRight" data-anime="600">
                    <img src={material} alt="" /> Fibra {bike.material}
                  </li>
                  <li className="fadeInLeft" data-anime="700">
                    <img src={speed} alt="" />
                    {bike.speed} km/h
                  </li>
                  <li className="fadeInUp" data-anime="800">
                    <img src={target} alt="" />
                    {bike.target}
                  </li>
                </ul>
                <Link
                  className="btn arrow fadeInUp"
                  data-anime="900"
                  to={`/product/${bike._id}`}
                >
                  Mais Sobre
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Catalog;
