import React from 'react'
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/CartPage';
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

 const  App=()=> {
  return (
    <Router>
      

     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='productpage' element={<ProductPage/>}/>
      <Route path='cartpage' element={<CartPage/>}/>
      <Route path='productdetail' element={<ProductDetail/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='productdetail' element={<ProductDetail/>}/>
       <Route path='signup' element={<Signup/>}/>

     </Routes>

    </Router>
  )
}

export default App;
