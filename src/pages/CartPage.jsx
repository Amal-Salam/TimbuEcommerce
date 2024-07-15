// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import Header from '../components/homeComponents/header';
import ShoppingCart from '../components/cartComponents/shoppingCart';
 import Footer from '../components/homeComponents/footer';


const Cart = () => {
  return (
    <div className='home-pg '>
      <Header />
      <ShoppingCart/>
      {/* <CardDisplay /> */}
      {/* <TopFilter /> */}
      {/* <Body /> */}
      <Footer />
    </div>
  );
};

export default Cart;