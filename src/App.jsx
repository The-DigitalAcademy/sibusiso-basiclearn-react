import Home from './pages/Home';
import Sale from './pages/Sale';
import Men from './pages/Men';
import Women from './pages/Women';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";


function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])

  return (
    <div>

      {

        loading ?
          <HashLoader color={'#1f0ac4'} loading={loading} size={100} className='spinner-HashLoader'/>
          :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sale" element={<Sale />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      }
    </div>
  );
}

export default App;
