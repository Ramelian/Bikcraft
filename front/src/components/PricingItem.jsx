import { Link } from "react-router-dom";

const PricingItem = ({ type }) => {
  const mainArray = [
    "Cinco trocas por ano",
    "Assistência especial",
    "Suporte 24h",
    "Cobertura nacional",
    "Desconto em parceiros",
    "Acesso ao Clube Bikcraft",
  ];
  const additionalArray = [
    "Duas trocas por ano",
    "Assistência técnica",
    "Suporte 08h às 18h",
    "Cobertura estadual",
  ];

  const condition = type === "main";
  return (
    <div className="pricing-item">
      <h3 className={`font-1-xl ${
          condition ?  "color-p1" : "color-0"
        } fadeInDown`} data-anime="1200">
        {condition ? "OURO": "PRATA" }
      </h3>
      <span
        className={`font-1-xl ${
          condition ? "color-p1 fadeInLeft" : "color-0 fadeInDown"
        }`}
        data-anime="1200"
      >
        {condition ?  "R$ 299" : "R$ 199" }<span className="font-1-xs color-6">mensal</span>
      </span>
      <ul className="font-2-m color-0">
        {(condition ? mainArray : additionalArray).map((item, index) => {
          return (
            <li key={index} className="fadeInRight" data-anime="1600">
              {item}
            </li>
          );
        })}
      </ul>
      <Link className={`btn ${!condition && "scnd"}`} to="/order">
        Inscreva-se
      </Link>
    </div>
  );
};
export default PricingItem;
