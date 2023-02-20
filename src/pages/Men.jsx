import React from 'react';
import Nabar from '../components/Nabar';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Men = () => {

  return (
    <>
      <Nabar/>
      <div className='header'>Men</div>
      <div className='container'>
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" title="LightBlue Denim" price="R1454.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/01/22/16428233383cc6de2ff4211011b4a29850cb6a7cf3_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2021/11/03/1635910345693d07afb3a754b2b28b34ff17fc7f6e_thumbnail_900x.webp" title="Dark Denim" price="R799.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/06/20/1655695601ef5d795362e453ce3f7adfca7ccc9f3a_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2021/10/19/163462638440cd4fc66db00c951accb3dabad5feea_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/27/16668405872f2be82cee8e1962fc414e68a755cb63_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart" />
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/08/19/166089218686c64110e89d70e632d8d3513686d57a_thumbnail_900x.webp" title="LightBlue Denim" price="R799.99" button="AddtoCart" />
      </div>
      <Footer />
    </>

  )
}

export default Men