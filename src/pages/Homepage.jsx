// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import Header from '../components/homeComponents/header';
import Hero from '../components/homeComponents/hero';
import Footer from '../components/homeComponents/footer';
import Body from '../components/homeComponents/homeBody';


const Home = () => {

  return (
    <div className='home-pg '>
      <Header />
      <Hero />
      <Body/>
      <Footer />
    </div>
  );
};

export default Home;
