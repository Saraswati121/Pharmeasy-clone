import React from 'react'
import { Description } from './Description';
import { Footer } from './Footer';
import Navbar from './Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Description/>
      <Footer/>
    </div>
  )
}
