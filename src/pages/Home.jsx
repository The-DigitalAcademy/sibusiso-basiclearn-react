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

    console.log(product)
  }

  return (
    <>
      <Nabar cartData={cartData} />
      <Playvideo />
      <div className="header">Our Products</div>
      
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Card
              key={index}
              id={product.id}
              productsImg={product.productsImg}
              title={product.title}
              amount={product.amount}
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
