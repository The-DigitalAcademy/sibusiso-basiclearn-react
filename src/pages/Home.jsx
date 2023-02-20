import React from 'react';
import Nabar from '../components/Nabar';
import Playvideo from '../components/Playvideo';
import Footer from '../components/Footer';
import Card from '../components/Card';



const Home = (props) => {
    
  
  
    return (
        <>
        <Nabar/>
        <Playvideo/>
        <div className='header'>Our Products</div>
        <div className='container'>
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/11/15/166848256291b21fc7b6add14d531765fbb95dbfd0_thumbnail_900x.webp" title="LB Denim Skirt" price="R454.99" button="AddtoBag"/>
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" title="LightBlue Denim" price="R234.99" button="AddtoBag"/>
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/29/16670278634fbfb54f6f9c5b8191ffbf79f473f124_thumbnail_900x.webp" title="Button Denim Skirt" price="R341.99" button="AddtoBag"/>
        <Card productsImg="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" title="Yellow Denim" price="R599.99" button="AddtoBag"/>
        </div>
        <Footer/>
        </>
    )
}

export default Home