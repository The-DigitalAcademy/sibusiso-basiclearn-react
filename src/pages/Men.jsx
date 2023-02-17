import React from 'react';
import Nabar from '../components/Nabar';
import Footer from '../components/Footer';
import { useState } from 'react';

const Men = () => {

  const [cartCount, setCartCount] = useState(0);

  function addtoCart() {
      setCartCount(cartCount + 1);
      console.log(cartCount)
  }

  return (
    <>
    <Nabar dataCart={cartCount} />
    <div className='container'>
      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LightBlue Denim</h5>
          <p className="card-price">R1499.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/01/22/16428233383cc6de2ff4211011b4a29850cb6a7cf3_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dark Denim</h5>
          <p className="card-price">R1599.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2021/11/03/1635910345693d07afb3a754b2b28b34ff17fc7f6e_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lightblue Denim</h5>
          <p className="card-price">R1699.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2021/10/06/1633503150353758b29cf6828556c529bbfe131c8b_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dark Denim</h5>
          <p className="card-price">R1599.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dark Denim</h5>
          <p className="card-price">R1499.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2021/10/19/163462638440cd4fc66db00c951accb3dabad5feea_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dark Denim</h5>
          <p className="card-price">R1399.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/10/27/16668405872f2be82cee8e1962fc414e68a755cb63_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dark Denim</h5>
          <p className="card-price">R1599.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>

      <div className="card">
        <img src="https://img.ltwebstatic.com/images3_pi/2022/08/19/166089218686c64110e89d70e632d8d3513686d57a_thumbnail_900x.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dark Denim</h5>
          <p className="card-price">R1499.99</p>
          <a href="#" className="btn btn-primary" onClick={addtoCart}>Add To Bag</a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Men