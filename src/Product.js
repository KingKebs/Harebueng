import React from "react";
import "./product.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <span className="product_price">
          <small>R</small>
          <strong>{price}</strong>
        </span>
        <div className="product_rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend"></Typography>
            <Rating name="simple-controlled" value={rating} />
          </Box>
        </div>
      </div>
      <img src={image} alt="product" />
      <button>Add to cart</button>
    </div>
  );
}

export default product;
