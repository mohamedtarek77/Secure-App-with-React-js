import React from 'react';
import Cloud from './comp/Cloud';
import Data from './comp/Data';
import Footer from './comp/Footer';
import Hero from './comp/hero';
import Navbar from './comp/Navbar';

 export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Data/>
      <Cloud/>
      <Footer/>
    </div>
  );
}

