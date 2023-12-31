import { MdOutlinePayment } from "react-icons/md";
import americanExpress from "../../../images/paymentMethod/americanexpress.png";
import masterCard from "../../../images/paymentMethod/mastercard.png";
import payPal from "../../../images/paymentMethod/paypal_logo.png";
import visa from "../../../images/paymentMethod/visa.png";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <div className="payment-method-container">
      <div className="flex gap-10px margin-bottom-10px vertically-center underlined fit-content">
        <MdOutlinePayment size={30} />
        <h1 className="form-title margin-0">Payment</h1>
      </div>
      <div className="flex-column gap-10px">
        <img style={{ width: "150px" }} src={payPal} alt="PayPal Logo" />
        <label className="flex gap-10px">
          <input type="radio" name="paymentMethod" value="paypal" />
          <p>PayPal</p>
        </label>
      </div>
      <div className="flex-column">
        <div className="flex wrap">
          <img className="payment-card-image" src={visa} alt="Visa Logo" />
          <img
            className="payment-card-image"
            src={masterCard}
            alt="MasterCard Logo"
          />
          <img
            className="payment-card-image"
            src={americanExpress}
            alt="American Express Logo"
          />
        </div>
        <label className="flex gap-10px">
          <input type="radio" name="paymentMethod" value="creditCard" />
          <p>Credit Card</p>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
