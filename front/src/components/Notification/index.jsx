import "./Notification.css";

const Notification = ({ type, text }) => {
  return (
    <div className={`notification ${type}`}>
      <span className="message">{text}</span>
    </div>
  );
};
export default Notification;
