import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/section/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/section/Cart'
import Zfold from './components/section/Zfold'
import Login from './components/section/Login'

const App = () => {
  const location = useLocation();
  const LoginPage = location.pathname.includes('Login');

  return (
    <div className='app'>
      {!LoginPage && <Header />}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Zfold" element={<Zfold />} />
          <Route path="Login" element={<Login />} />
          <Route path="/section/Login" element={<Login />} />
        </Routes>
      </main>
      {!LoginPage && <Footer />}
    </div>

  )
}

export default App
