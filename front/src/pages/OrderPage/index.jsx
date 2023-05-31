import { useState } from "react";
import { ContainerForm, Title, OrderSelector,OrderForm } from "./../../components";
import "./Order.scss"

const OrderPage = ({mobile}) => {
  const [option, setOption] = useState(null);

  return (
    <>
      <Title mobile={mobile} styling="padding-250" text="COTAÇÕES NO SEU EMAIL" title="solicite um orçamento" />
      <ContainerForm blockOne={<OrderSelector option={option} setOption={setOption}/>} blockTwo={<OrderForm option={option}/>} />
    </>
  );
};
export default OrderPage;
