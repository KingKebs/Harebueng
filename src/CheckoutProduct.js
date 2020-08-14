import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove items from cart function
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="checkoutProduct"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p>
          <small>
            <strong>R</strong>
          </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend"></Typography>
            <Rating name="simple-controlled" value={rating} />
          </Box>
        </div>
        <button onClick={removeFromBasket} className="removeBtn">
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
