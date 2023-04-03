import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  // true:로그인 / false:로그아웃
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
