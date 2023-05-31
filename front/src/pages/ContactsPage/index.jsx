import {Title, ContainerForm, ContactsBlock, ContactsForm, Location} from "../../components"

const Contacts = () => {
  return (
    <>
    <Title styling="padding-250" text="RESPOSTAS EM ATÉ 24H" title="nosso contato"/>
    <ContainerForm blockOne={<ContactsBlock/>} blockTwo={<ContactsForm/>}/>
    <Location />
    </>
  )
}
export default Contacts