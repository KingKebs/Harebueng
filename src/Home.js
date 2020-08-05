import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src={require("./images/ecommerce-2140603_960_720.jpg")}
        alt="banner"
      />
      {/* Product pros: id title, rating, image */}
      <Product
        id="8775"
        title="Muko Black"
        price={11.96}
        rating={4}
        image={require("./images/mukoBlack.jpg")}
      />
    </div>
  );
}

export default Home;
