import { useContext } from "react";
import { BikesContext } from "../../Context";
import "./Title.scss";

const Title = ({ styling, title, text, children }) => {
  const { mobile } = useContext(BikesContext);
  return (
    <div className={`named-bg ${styling}`}>
      <div className="container">
        <p
          className={`${
            mobile ? "font-1-m-b" : "font-2-l-b"
          } color-5 fadeInDown" data-anime="200`}
        >
          {text}
        </p>
        <h1
          className={`${mobile ? "font-1-l" : "font-1-xxl"} color-0 fadeInDown`}
          data-anime="200"
        >
          {title}
          <span className="color-p1">.</span>
        </h1>
      </div>
      {children}
    </div>
  );
};
export default Title;
