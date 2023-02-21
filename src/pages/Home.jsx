import React from "react";
import Nabar from "../components/Nabar";
import Playvideo from "../components/Playvideo";
import Footer from "../components/Footer";
import Card from "../components/Card";
import productData from "./productData";
import { useState } from "react";

const Home = () => {
  const [products, setProduct] = useState(productData);

  const [cartData, setCartData] = useState([])

  const addToCart = (product) => {
    setCartData([...cartData, product])
  }

  return (
    <>
      <Nabar cartData={cartData} />
      <Playvideo />
      <button className="btn btn-primary">AddtoCart</button>

      <div className="header">Our Products</div>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Card
              key={index}
              productsImg={product.productsImg}
              title={product.title}
              price={product.price}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
