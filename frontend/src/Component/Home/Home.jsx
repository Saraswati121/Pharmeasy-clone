import React from 'react'
import { Footer } from './Footer';
import Navbar from './Navbar';
import Homepage from './Homepage';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}
