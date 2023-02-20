import React, { useState } from 'react';


const Card = (props) => {
  const [countproduct, setCountproduct] = useState(0);


  function addtoBag() {
    setCountproduct( countproduct + 1);
    console.log(countproduct)
  }


  return (
    <>
      <div className='container'>
        <div className="card">
          <img src={props.productsImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-discountPrice">{props.discountPrice}</p>
            <p className="card-price">{props.price}</p>
            <button className="btn btn-primary" onClick={addtoBag}>{props.button}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
