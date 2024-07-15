import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Homepage';
import './index.css';
import Cart from './pages/CartPage';
import Checkout from './pages/CheckoutPage';
// import ProductDetail from './pages/ProductDetailPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path ='/cart' element={<Cart/>}/>
          {/* this will just be /:id because it should route 
          to the detail for that id and populate the info on the page with that associated with the id */}
          {/* <Route path ='/:id' element={<ProductDetailPage/>}/> */}
          <Route path = '/checkout' element ={<Checkout/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
