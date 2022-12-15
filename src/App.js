import './App.css';
import Logo from './pages/Logo';
import Sale from './pages/Sale';
import Men from './pages/Men';
import Women from './pages/Women';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="sale" element={<Sale />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
