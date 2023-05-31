import "./ContainerForm.scss";

const ContainerForm = ({ blockOne, blockTwo }) => {
  return (
    <div className="container fadeInDown" data-anime="1600">
      <div className="card">
        <div className="first color-1">{blockOne}</div>
        <div className="second">{blockTwo}</div>
      </div>
    </div>
  );
};
export default ContainerForm;
