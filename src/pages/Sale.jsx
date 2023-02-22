import React from 'react';
import Nabar from '../components/Nabar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useState } from 'react';


function Sale() {
  const [cartData, setCartData] = useState([])

  // const addToCart = (product) => {
  //   setCartData([...cartData, product])
  // }

  return (
    <div>
      <Nabar cartData={cartData}/>
      <div className='header'>Sale</div>
      <div className='container'>
      <div className="row">
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/11/15/166848256291b21fc7b6add14d531765fbb95dbfd0_thumbnail_900x.webp" title="LB Denim Skirt" amount={<del>434.99</del>} discountPrice="330.00" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" title="LightBlue Denim" amount={<del>334.99</del>} discountPrice="290.00" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/29/16670278634fbfb54f6f9c5b8191ffbf79f473f124_thumbnail_900x.webp" title="Button Denim Skirt" amount={<del>234.99</del>} discountPrice="195.00" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" title="Yellow Denim" amount={<del>534.99</del>} discountPrice="430.00" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sale
