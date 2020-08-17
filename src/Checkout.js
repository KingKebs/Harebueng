import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        // src={require("./images/checkout.jpg")}
        alt="checkout"
      />

      {basket?.length === 0 ? ( // if no items on the cart display below
        <div>
          <h2 className="checkout_title">Your shopping cart is empty</h2>
          <p className="checkout_text">
            You have no items on your shopping basket. To buy one or more click
            "add to basket" next to item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title"> Review your Shopping cart</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
