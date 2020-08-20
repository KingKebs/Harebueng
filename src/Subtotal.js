import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { basketTotal } from "./reducer";
import "./subtotal.css";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* PRICE  */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"ZAR"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
