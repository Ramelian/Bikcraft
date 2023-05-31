import "./OrderSelector.scss";
import { bikeimg, material, speed, target } from "../../assets/svg";

const SelectorItem = ({ index, text, data, choose, chosen }) => {
  const active = index === chosen;
  return (
    <div
      onClick={() => choose(index)}
      className={`itemSelector ${active && "active"}`}
    >
      <div className="main">
        <p className="font-2-m">{text}</p>
        {active && data && <span className="font-2-m">R$ {data.price}</span>}
      </div>
      {active && data && data.motor && (
        <div className="information">
          <ul>
            <li>
              <img src={bikeimg} alt="bike" />
              <span className="font-1-xs">Motor {data.motor}</span>
            </li>
            <li>
              <img src={material} alt="bike" />
              <span className="font-1-xs">Fibra de {data.material}</span>
            </li>
            <li>
              <img src={speed} alt="bike" />
              <span className="font-1-xs">{data.speed}km/h</span>
            </li>
            <li>
              <img src={target} alt="bike" />
              <span className="font-1-xs">{data.target}</span>
            </li>
          </ul>
          <img
            src={`http://localhost:4444/uploads/${data.imgUrl}`}
            alt="bike"
          />
        </div>
      )}
    </div>
  );
};
export default SelectorItem;
