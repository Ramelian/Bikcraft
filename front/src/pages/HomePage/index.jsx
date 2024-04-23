import { nimbus, preview, technologia, testimony } from "../../assets/images";
import {
  carvan,
  dogs,
  flexblog,
  handel,
  lescone,
  ranek,
  surfbot,
  wildbeast,
} from "../../assets/svg/partners";
import "./Home.scss";
import { useEffect, useContext } from "react";
import { Advantages, Pricing, Title } from "../../components";
import { Link } from "react-router-dom";
import { BikesContext } from "../../Context";

const typeWriter = (textElement, text, delay = 50) => {
  let charIndex = 0;
  const maxIndex = text.length - 1;
  textElement.textContent = "";

  const type = () => {
    textElement.textContent += text[charIndex];
    charIndex++;

    if (charIndex <= maxIndex) {
      setTimeout(type, delay);
    }
  };
  type();
};

const Home = () => {
  const { bikes } = useContext(BikesContext);

  useEffect(() => {
    const textElement = document.getElementById("typing-text");
    const text = textElement.textContent.trim();
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          typeWriter(textElement, text, 25);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(textElement);
  }, []);

  return (
    <>
      <div className="preview-bg">
        <div className="preview container">
          <div className="preview-content">
            <h1 className="font-1-xxl color-0 fadeInDown" data-anime="200">
              bicicletas feitas sob medida<span className="color-p1">.</span>
            </h1>
            <p className="font-2-l color-5 fadeInDown" data-anime="400">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para você. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <Link to="/catalog">
              <div className="btn fadeInDown" data-anime="600">
                Selecione a sua
              </div>
            </Link>
          </div>
          <picture data-anime="800" className="fadeInDown">
            <source media="(max-width: 800px)" srcSet={nimbus} />
            <img
              src={preview}
              width="1280"
              height="1600"
              alt="Some dumbass bike."
            />
          </picture>
        </div>
      </div>

      <div className="bike-list">
        <h2 className="container font-1-xxl fadeInDown" data-anime="200">
          escolha a sua<span className="color-p1">.</span>
        </h2>
        <ul>
          {bikes.slice(0, 3).map((bike) => {
            return (
              <li key={bike._id} className="fadeInRight" data-anime="800">
                <Link to={`/product/${bike._id}`}>
                  <img
                    src={`bikes/${bike.imgUrl}`}
                    alt="Bicicleta preta"
                    width="920"
                    height="1040"
                  />
                  <h3 className="font-1-xl">{bike.name}</h3>
                  <span className="font-2-m color-8">R$ {bike.price}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tech-bg">
        <div className="tech container">
          <div className="tech-content">
            <span className="font-2-l-b color-5 fadeInDown" data-anime="200">
              Tecnologia Avançada
            </span>
            <h2 className="font-1-xxl color-0 fadeInDown" data-anime="400">
              você escolhe as suas cores e componentes
              <span className="color-p1">.</span>
            </h2>
            <p className="font-2-l color-5 fadeInDown" data-anime="400">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <div
              style={{ marginBottom: "20px" }}
              className="link fadeInDown"
              data-anime="400"
              to="/info"
            >
              Escolha um modelo
            </div>
            <Advantages techArray={["bike", "madeOf"]} />
          </div>
          <div className="tech-img fadeInUp" data-anime="1000">
            <img src={technologia} width="1200" height="1920" alt="" />
          </div>
        </div>
      </div>

      <div className="partners" area-label="Nossos Parceiros">
        <Title styling="whiteBg" title="nossos parceiros" />

        <ul>
          <li className="fadeInRight" data-anime="1000">
            <img src={carvan} alt="Caravan" width="140" height="38" />
          </li>
          <li className="fadeInDown" data-anime="1000">
            <img src={ranek} alt="Ranek" width="149" height="36" />
          </li>
          <li className="fadeInRight" data-anime="1000">
            <img src={handel} alt="Handel" width="140" height="50" />
          </li>
          <li className="fadeInLeft" data-anime="1000">
            <img src={dogs} alt="Dogs" width="152" height="39" />
          </li>
          <li className="fadeInDown" data-anime="1000">
            <img src={lescone} alt="LeScone" width="208" height="41" />
          </li>
          <li className="fadeInLeft" data-anime="1000">
            <img src={flexblog} alt="FlexBlog" width="165" height="38" />
          </li>
          <li className="fadeInUp" data-anime="1000">
            <img src={wildbeast} alt="Wildbeast" width="196" height="34" />
          </li>
          <li className="fadeInRight" data-anime="1000">
            <img src={surfbot} alt="Surfbot" width="200" height="49" />
          </li>
        </ul>
      </div>

      <div className="testimony" area-label="Testimony">
        <div className="fadeInDown" data-anime="800">
          <img
            src={testimony}
            width="1560"
            height="1360"
            alt="Pessoa pedalando uma bicicleta Bikcraft"
          />
        </div>
        <div className="testimony-content">
          <blockquote className="font-1-xl color-p5">
            <p id="typing-text" className="hidden">
              Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
              foi intensificar o meu amor por esta atividade. Recomendo à todos
              que amo.
            </p>
          </blockquote>
          <span className="font-1-m-b color-p4 fadeInUp" data-anime="1200">
            Ana Júlia
          </span>
        </div>
      </div>

      <Pricing />
    </>
  );
};
export default Home;
