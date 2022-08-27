import React from 'react'
import { Description } from './Description';
import { Footer } from './Footer';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Search from './Search';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Homepage/>
      <Description/>
      <Footer/>
    </div>
  )
}
