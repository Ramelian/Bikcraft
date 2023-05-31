import { clock } from "../../assets/svg";

const LocationItem = ({ image, locationData }) => {
  return (
    <div className="item fadeInLeft" data-anime="400">
      <img src={image} alt="Map" />
      <div className="text-info">
        <h4 className="font-1-xl">{locationData.city}</h4>
        <div className="contacts">
          <ul>
            <li>{locationData.address}</li>
            <li>{locationData.city}</li>
          </ul>
          <ul>
            <li>{locationData.email}</li>
            <li>{locationData.phone}</li>
          </ul>
        </div>
        <div className="time">
            <img src={clock} alt="clock" />
            <p className="font-1-m-b">08-18h seg à dom</p>
        </div>
      </div>
    </div>
  );
};
export default LocationItem;
