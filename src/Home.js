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
      <div className="home_row">
        <Product
          id="8775"
          title="Muko Black"
          price={11.96}
          image={require("./images/mukoBlack.jpg")}
          rating={4}
        />
        <Product
          id="8775"
          title="Logic Bluetooth Speaker"
          price={11.96}
          image={require("./images/speaker.jpeg")}
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="8775"
          title="Muko Black"
          price={11.96}
          image={require("./images/mukoBlack.jpg")}
          rating={4}
        />
        <Product
          id="8775"
          title="Muko Black"
          price={11.96}
          image={require("./images/mukoBlack.jpg")}
          rating={4}
        />
        <Product
          id="8775"
          title="Muko Black"
          price={11.96}
          image={require("./images/mukoBlack.jpg")}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
