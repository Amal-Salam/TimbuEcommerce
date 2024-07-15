// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import Header from '../components/homeComponents/header';
import { NavLink } from 'react-router-dom';
import Footer from '../components/homeComponents/footer';
import OrderSummary from '../components/checkoutComponents/orderSummary'

import DeliveryDetails from '../components/checkoutComponents/deliveryDetails';
import CardPaymentDetails from '../components/checkoutComponents/cardPaymentdetails';

const Checkout = () => {
  return (
    <div className='home-pg '>
      <Header  />
      <div className='w-[430px] h-10 px-4 py-2 justify-start items-center gap-[246px] inline-flex'>
        <div className='justify-start items-center gap-3 flex'>
          <div className='w-6 h-6 relative origin-top-left -rotate-90' />
          <div className='justify-start items-center gap-3 flex'>
            <NavLink to='/cart'>
              {' '}
              <div className="text-zinc-900 text-base font-bold font-['Lato']">
                Back to cart
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <DeliveryDetails/>
      <CardPaymentDetails/>
      <OrderSummary/>
      <Footer />
    </div>
  );
};

export default Checkout;
