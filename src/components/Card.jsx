import React from "react";

const Card = ({id, productsImg, title, discountPrice, amount, addToCart}) => {

  const add = () => {
    addToCart({id, productsImg, title, discountPrice, amount})
  }

  return (
    <div className="col-md-3">
      <div className="card">
        <img src={productsImg} className="card-image" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-discountPrice">{discountPrice}</p>
          <p className="card-price">R{amount}</p>
          <button className="btn btn-primary" onClick={add}>AddtoCart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
