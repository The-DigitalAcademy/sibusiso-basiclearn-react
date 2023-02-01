import React, {useState} from 'react';
import Nabar from '../components/Nabar';
import Footer from '../components/Footer';

const Cart = () => {

    const [countup, setCountup] = useState(0);

    return (
        <>
            <Nabar />
            <div className='container'>
                <div className='products-card'>
                    <div className='myshopping'>My Cart</div>
                    <div className="cart">
                        <img src="https://img.ltwebstatic.com/images3_pi/2022/11/15/166848256291b21fc7b6add14d531765fbb95dbfd0_thumbnail_900x.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title">LB Denim Skirt</p>
                            <p className="card-price">R499.99</p>
                            <a href="#" className="btn-remove"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></a>
                        </div>
                    </div>

                    <div className='count-symbol'>
                        <span className='cp' onClick={() => setCountup(countup + 1)}>+</span>
                        <span>{countup}</span>
                        <span className='cp' onClick={() => setCountup(countup - 1)}>-</span>
                    </div>

                    {/* <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2022/08/24/1661306732120c31444dbdfbe42d8d7da4eeb37830_thumbnail_900x.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LightBlue Denim</h5>
                            <p className="card-price">R1199.99</p>
                            <a href="#" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2022/01/22/16428233383cc6de2ff4211011b4a29850cb6a7cf3_thumbnail_900x.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LightBlue Denim</h5>
                            <p className="card-price">R1499.99</p>
                            <a href="#" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2022/10/09/1665302103268c1b697df3ea4e7fad66c635f9a9a5_thumbnail_900x.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LightBlue Denim</h5>
                            <p className="card-price">R1499.99</p>
                            <a href="#" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></a>
                        </div>
                    </div> */}
                </div>

                <div className='order-summary'>
                    <span>Order Summary</span>
                    <p className='subtotal-name'>Subtotal</p>
                    <p className='subtotal-amount'>R5 500.00</p>
                    <p className='item-name'>1 item</p>
                    <p className='item-amount'>R5 500.00</p>
                    <button className='btn-checkout'>Checkout</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart