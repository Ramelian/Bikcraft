import "./OrderSelector.scss";
import SelectorItem from "./SelectorItem";
import { useState, useContext } from "react";
import {BikesContext} from "../../Context"

const OrderSelector = ({option, setOption}) => {
  const {bikes} = useContext(BikesContext);

  const [topic, setTopic] = useState("bike");
  

  return (
    <>
      <div className="selectWrapper">
        <h4 className="light font-1-s">bikecraft ou seguro?</h4>
        <div className="gap-20">
          <SelectorItem index="bike" active text="Bikcraft" choose={setTopic} chosen={topic} />
          <SelectorItem index="seguro" text="Seguro" choose={setTopic} chosen={topic}/>
        </div>
      </div>
      <div className="selectWrapper">
        <h4 className="light font-1-s">ESCOLHA A SUA:</h4>
        { topic === "bike" && (<>
        {bikes.map((bike, i) => {
          const {price, motor, material, speed, target,imgUrl} = bike;
          const techs= {
            price,
            motor,
            material,
            speed,
            target,
            imgUrl
          }
          return(
            <SelectorItem key={i} index={bike._id} text={bike.name} data={techs} choose={setOption} chosen={option}/>
          )
        })
        }
        </>
      )}
      { topic === "seguro" && (<>
        <SelectorItem index={4}  text="Outro" data={{price: "299.00"}} choose={setOption} chosen={option}/>
        <SelectorItem index={5} text="Separa" data={{price: "399.00"}} choose={setOption} chosen={option}/>
        </>
      )}
      </div>
    </>
  );
};
export default OrderSelector;
