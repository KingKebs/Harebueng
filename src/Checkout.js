import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

import "./checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src={require("./images/desktop-.jpg")}
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
          {/* Map out all of the checkout products */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="checkout_right">
          {/* <Subtotal /> */}
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
