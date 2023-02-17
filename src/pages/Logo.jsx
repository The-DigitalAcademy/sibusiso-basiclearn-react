import React from 'react';
import Nabar from '../components/Nabar';
import Playvideo from '../components/Playvideo';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useState } from 'react';

const Logo = () => {
    const [cartCount, setCartCount] = useState(0);

    function addtoCart() {
        setCartCount(cartCount + 1);
        console.log(cartCount)
    }

    return (
        <>
        <Nabar dataCart={cartCount}/>
        <Playvideo/>
        <button onClick={addtoCart}>ADD</button>
        <Card
        onClick={addtoCart}/>
        <Footer/>
        </>
    )
}

export default Logo