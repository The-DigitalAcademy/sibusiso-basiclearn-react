import React from 'react';

const Card = (props) => {

 

  return (
    <>
    <div className='container'>
      <div className="card">
        <img src={props.productsImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-discountPrice">{props.discountPrice}</p>
          <p className="card-price">{props.price}</p>
          <a href="#" className="btn btn-primary">{props.button}</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card
