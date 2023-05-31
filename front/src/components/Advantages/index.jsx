import {
  bikeimg,
  target,
  action,
  delivery,
  speed,
  material,
  eco,
  lock,
} from "../../assets/svg";

import "./Advantages.scss";

const Advantages = ({ techArray }) => {
  const options = {
    bike: {
      img: bikeimg,
      title: "Motor Elétrico",
      paragraph:
        "Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.",
    },
    aim: {
      img: target,
      title: "Rastreador",
      paragraph:
        "Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.",
    },
    madeOf: {
      img: material,
      title: "Reparo de Quadro",
      paragraph:
        "Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.",
    },
    ecoFriendly: {
      img: eco,
      title: "Sustentável",
      paragraph:
        "Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.",
    },
    safety: {
      img: lock,
      title: "Segurança",
      paragraph:
        "O nosso seguro garante que todo reparo seja feito com peças genuínas e de alta qualidade. Confie na Bikcraft.",
    },
    maxSpeed: {
      img: speed,
      title: "40 Km/h",
      paragraph: "A mais rápida bicicleta elétrica disponível hoje no mercado.",
    },
  };
  return (
      <div className="tech-advg fadeInDown container" data-anime="800">
        {techArray.map((item, index) => {
          return (
            <div key={index}>
              <img src={options[item].img} width="24" height="24" alt="" />
              <h3 className="font-1-m color-0">{options[item].title}</h3>
              <p className="font-2-s color-5">{options[item].paragraph}</p>
            </div>
          );
        })}
      </div>
  );
};
export default Advantages;
