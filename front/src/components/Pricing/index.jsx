import PricingItem from "../PricingItem";
import "./Pricing.scss"


const Pricing = ({titleHide}) => {
    return (
      <div className="pricing-bg">
        <div className="pricing container">
          {!titleHide && <h2 className="font-1-xxl color-0 fadeInUp" data-anime="1200">
            seguros<span className="color-p1">.</span>
          </h2>}

            <PricingItem type="additional" />
            <PricingItem type="main" />
      </div>
      </div>
    );
  };
  export default Pricing;