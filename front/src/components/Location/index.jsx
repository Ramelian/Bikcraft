import { Title } from "../index";
import "./Location.scss";
import { rio, saoPaulo } from "../../assets/images/index";
import LocationItem from "./LocationItem";

const Location = () => {
  const data = [
    {
      address: "Rua Ali Perto, 25 ",
      city: "Rio de Janeiro",
      email: "rio@bikcraft.com",
      phone: "21 99999-9999",
    },
    {
      address: "Rua Ali Perto, 25 ",
      city: "São Paulo",
      email: "sp@bikcraft.com",
      phone: "11 99999-9999",
    },
  ];
  return (
    <Title title="loja locais" styling="whiteBg">
      <div className="locations container">
        <LocationItem image={rio} locationData={data[0]} />
        <LocationItem image={saoPaulo} locationData={data[1]} />
      </div>
    </Title>
  );
};
export default Location;
