import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src={require("./images/checkout.jpg")}
        alt="checkout"
      />
      {/* if there is nothing in the basket */}
      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout_title">Your shopping cart is empty</h2>
          <p className="checkout_text">
            You have no items on your shopping basket. To buy one or more click
            "add to basket" next to item.
          </p>
        </div>
      ) : (
        // otherwise if items are in the cart
        <div>
          <h2 className="checkout_title"> Review your Shopping cart</h2>
          {/* list out all the products on the baskey  */}
          {basket.map((item) => (
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
    </div>
  );
}

export default Checkout;
