import React from 'react';
import Nabar from '../components/Nabar';
import Card from '../components/Card';
import Footer from '../components/Footer';


function Sale() {

  return (
    <div>
      <Nabar />
      <div className='header'>Sale</div>
      <div className='container'>
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/11/15/166848256291b21fc7b6add14d531765fbb95dbfd0_thumbnail_900x.webp" title="LB Denim Skirt" price={<del>R434.99</del>} discountPrice="R330.00" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" title="LightBlue Denim" price={<del>R334.99</del>} discountPrice="R290.00" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/29/16670278634fbfb54f6f9c5b8191ffbf79f473f124_thumbnail_900x.webp" title="Button Denim Skirt" price={<del>R234.99</del>} discountPrice="R195.00" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" title="Yellow Denim" price={<del>R534.99</del>} discountPrice="R430.00" />
      </div>
      <Footer />
    </div>
  )
}

export default Sale
