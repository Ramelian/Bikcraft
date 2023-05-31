import {Pricing, Title, Advantages, Accordion } from "../../components";
import "./Info.scss"

const InfoPage = () => {
  const accordionData = [
    {title: "qual forma de pagamento vocês aceitam?" , 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
    {title: "Como posso entrar em contato? ", 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
    {title: "Vocês possuem algum desconto?", 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
    {title: "Qual garantia que possuo? ", 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
    {title: "Posso parcelar no boleto?", 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
    {title: "Quantas trocas posso fazer ao ano? ", 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
    {title: "Qual BikCraft devo escolher para o meu tamanho? ", 
    content:"Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro." },
  ]
  return (
    <>
    <Title text="ESCOLHA O SEGURO" title="você seguro"/>
    <Pricing titleHide />
    <Title styling="blackBg" title="nossas vantagens">
    <Advantages techArray={["bike", "madeOf", "ecoFriendly", "aim", "safety", "maxSpeed"]} />
    </Title>
    <Title styling="whiteBg" title="perguntas frequentes">
      <Accordion sections={accordionData} />
    </Title>
    </>
  )
}
export default InfoPage