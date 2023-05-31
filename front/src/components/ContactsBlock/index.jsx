import { location, phone, mail } from "../../assets/svg";
import "./ContactsBlock.scss";

const Contacts = () => {
  const data = [
    {
      img: location,
      list: [
        "Rua Ali Perto, 35",
        "Rio de Janeiro - RJ",
        "Brasil - Terra - Vila Láctea",
      ],
    },
    { img: mail, list: ["vendas@bikcraft.com", "assistencia@bikcraft.com"] },
    { img: phone, list: ["+55 22 99999-9999"] },
  ];
  return (
    <div className="contacts">
      <h4 className="font-1-m-b">Loja Online</h4>
      {data.map((item, index) => {
        return (
          <div key={ Math.round(Math.random()*10000)} className="item">
            <img src={item.img} alt="Social" />
            <ul>
              {item.list.map((text) => (
                <li className="font-1-s" key={Math.round(Math.random()*10000)}>{text}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Contacts;
