import React from "react";
import StarRating from "react-bootstrap-star-rating";

function product({ id, title, price, rating }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product_price">
        <small>R</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        <StarRating defaultValue={rating} min={0} max={10} step={0.5} />
      </div>
    </div>
  );
}

export default product;
