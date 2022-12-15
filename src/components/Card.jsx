import React from 'react';

const Card = () => {
  return (
    <>
    <div className='slogan'>FEATURED PRODUCTS
      </div>
    <div className='container'>
      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/11/15/166848256291b21fc7b6add14d531765fbb95dbfd0_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LB Denim Skirt</h5>
          <p className="card-price">R454.99</p>
          <a href="#" className="btn btn-primary">Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LightBlue Denim</h5>
          <p className="card-price">R599.99</p>
          <a href="#" className="btn btn-primary">Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/10/29/16670278634fbfb54f6f9c5b8191ffbf79f473f124_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Button Denim Skirt</h5>
          <p className="card-price">R454.99</p>
          <a href="#" className="btn btn-primary">Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Yellow Denim</h5>
          <p className="card-price">R599.99</p>
          <a href="#" className="btn btn-primary">Add To Bag</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card
