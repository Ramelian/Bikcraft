import "./Product.scss";
import { magic, nebula, insurance } from "../../assets/images";
import { bikeimg, material, speed, target } from "../../assets/svg";
import { Title, ImageSlider } from "./../../components";
import { useContext, useEffect, useState } from "react";
import axios from "../../axios.js";
import { useParams } from "react-router";
import { BikesContext } from "../../Context";
import { Link } from "react-router-dom";

const Product = () => {
  const { mobile, bikes, loading } = useContext(BikesContext);
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const image = `https://bikcraft.onrender.com/uploads/${data.imgUrl}`;
  const images = [image, image, image];

  return (
    <>
      <Title title={data.name} text="R$ 4999">
        <div className="bikes container">
          {mobile ? (
            <ImageSlider images={images} />
          ) : (
            <div className="bikes-imgs">
              {images.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="1"
                    className="bike-img-switchable fadeInDown"
                    data-anime="400"
                  />
                );
              })}
            </div>
          )}
          <div className="bikes-content">
            <p className="font-2-l color-5 fadeInLeft" data-anime="200">
              A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div className="bikes-name">
              <Link to="/order">
                <div className="btn fadeInRight" data-anime="200">
                  Comprar Agora
                </div>
              </Link>
              <span className="font-1-xs color-6 fadeInRight" data-anime="200">
                <img src="./assets/svg/delievery.svg" alt="" /> entrega em 5
                dias
              </span>
              <span className="font-1-xs color-6 fadeInRight" data-anime="200">
                <img src="./assets/svg/action.svg" alt="" /> 18 em estoque
              </span>
            </div>

            <h2 className="font-1-xs color-0 fadeInRight" data-anime="200">
              Informações
            </h2>
            <ul className="bikes-infos">
              <li className="fadeInDown" data-anime="600">
                <img src={bikeimg} alt="" />
                <h3 className="font-1-m color-0">Motor {data.motor}</h3>
                <p className="font-2-xs color-5">
                  Permite você viajar distâncias inimaginaveis com a sua bike.
                </p>
              </li>
              <li className="fadeInRight" data-anime="600">
                <img src={speed} alt="" />
                <h3 className="font-1-m color-0">{data.speed} km/h</h3>
                <p className="font-2-xs color-5">
                  A mais rápida bicicleta elétrica disponível hoje no mercado.
                </p>
              </li>
              <li className="fadeInLeft" data-anime="600">
                <img src={target} alt="" />
                <h3 className="font-1-m color-0">{data.target}</h3>
                <p className="font-2-xs color-5">
                  Rastreador e sistema anti-furto para garantir o seu sossego.
                </p>
              </li>
              <li className="fadeInUp" data-anime="6200">
                <img src={material} alt="" />
                <h3 className="font-1-m color-0">Fibra de {data.material}</h3>
                <p className="font-2-xs color-5">
                  Maior proteção possível para a sua Bikcraft com fibra de
                  carbono.
                </p>
              </li>
            </ul>
            <h2 className="font-1-xs color-0">Ficha Técnica</h2>
            <ul className="bikes-list font-2-s color-4">
              <li className="fadeInDown" data-anime="400">
                Peso <span>{data.weight} kg</span>
              </li>
              <li className="fadeInLeft" data-anime="500">
                Altura <span>{data.height} cm</span>
              </li>
              <li className="fadeInRight" data-anime="600">
                Largura <span>{data.width} cm</span>
              </li>
              <li className="fadeInUp" data-anime="700">
                Profundidade <span>10 cm</span>
              </li>
              <li className="fadeInRight" data-anime="800">
                Marchas <span>{data.marches}</span>
              </li>
              <li className="fadeInDown" data-anime="900">
                Roda <span>{data.wheel}</span>
              </li>
            </ul>
          </div>
        </div>
      </Title>

      <div className="bike-show container">
        <h2 className="font-1-xxlfadeInRight" data-anime="400">
          escolha a sua<span className="color-p1">.</span>
        </h2>

        <ul>
          {bikes.slice(0, 2).map((bike, index) => {
            return (
              <Link to={`/product/${bike._id}`}>
                <li key={index}>
                  <div className="fadeInRight" data-anime="500">
                    <img
                      src={`http://localhost:4444/uploads/${bike.imgUrl}`}
                      alt="Bicicleta preta"
                    />
                    <h3 className="font-1-xl fadeInRight" data-anime="600">
                      {bike.name}
                    </h3>
                    <span
                      className="font-2-m color-8 fadeInRight"
                      data-anime="700"
                    >
                      R$ {bike.price}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="insurance-bg">
        <div className="insurance container">
          <div className="insurance-img fadeInRight" data-anime="600">
            <img src={insurance} alt="1" />
          </div>
          <div className="insurance-content fadeInRight" data-anime="800">
            <h2 className="font-1-xxl color-0">
              Pedale mais tranquilo com o nosso{" "}
              <span className="color-p1">insurance.</span>
            </h2>
            <p className="font-2-l color-5">
              Inscreva-se em um dos planos do nosso insurance Bikcraft e
              aproveite diversos benefícios.
            </p>
            <Link to="/info">
              <div className="btn">Conheça Mais</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
