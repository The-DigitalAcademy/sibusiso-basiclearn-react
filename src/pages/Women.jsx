import React from 'react';
import Nabar from '../components/Nabar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useState } from 'react';

const Women = () => {
  const [cartCount] = useState(0);

 

  return (
    <>
    <Nabar dataCart={cartCount}/>
    <div className='header'>Women</div>
    <div className='container'>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/07/19/1658209617483a8df128ab0be46a19ce21e4a2b77f_thumbnail_900x.webp" title="LightBlue Denim" price="R1454.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/11/13/1668316305e398cadf00e47f81b02bfaebe8e77381_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/11/15/166848256291b21fc7b6add14d531765fbb95dbfd0_thumbnail_900x.webp" title="Dark Denim" price="R799.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2021/06/11/1623404376f881232e77d202a66cd4146315532b5a_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/06/20/1655695601ef5d795362e453ce3f7adfca7ccc9f3a_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2020/06/15/1592189619fef00b62c41df092bce9862081e09a23_thumbnail_405x552.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/07/27/16589017080b82b357c14dc141dad4df8bc0556c0c_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart"/>
      <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/11/04/1667524466461a8174b0630e3eee85b44c65985547_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart"/>
    </div>
    <Footer/>
    </>
  )
}

export default Women