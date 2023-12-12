import './App.css';


import { PageHeader } from './header';
import LoginComponent from './login';
import ProductsById from './components/team10/ProductsById';
import Dashboard from './components/team10/Dashboard';
import ProductsByText from './components/team10/ProductsByText';

import ProductComponent from './components/ProductComponent';
import WishlistComponent from './components/WishlistComponent';
import CartComponent from './components/CartComponent';
import SearchComponent from './components/SearchComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useState, useEffect } from 'react';
import ProductDetails from "./components/team3/ProductDetails"

function App() {

  const [prodId, setProdId] = useState(null);
  const [openProdPage, setOpenProdPage] = useState(false);

  const selectProduct = (prdId) => {
    console.log("CALL FOR PROD  " + prdId);
    setProdId(prdId);
    setOpenProdPage(true);
  }

  const selectSearchPage = () => {
    setProdId(null);
    setOpenProdPage(false);
  }


  return (
    <>
      <PageHeader />
      <Routes>
        <Route
          path='/wishList'
          element={<WishlistComponent />} />
        <Route
          path='/cart'
          element={<CartComponent />} />

        <Route path="/login" element={<LoginComponent />} />
        <Route path="/Dashboard/:emailId" element={<Dashboard />} />
        <Route path="/ProductsById/:productId" element={<ProductsById />} />
        <Route path="/ProductsByText/:text" element={<ProductsByText />} />

      </Routes>

      {/* {openProdPage==true  && <ProductDetails productId={prodId} selectPage={selectSearchPage}/>}
      {openProdPage==false && prodId==null && <ProductComponent selectPage={selectProduct} />} */}
    </>
  );


}

export default App;