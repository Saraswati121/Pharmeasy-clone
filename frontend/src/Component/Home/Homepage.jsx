import React from 'react'
import style from './homepage.module.css'
import Firstpart from './Firstpart';
import Carousal from './Carousal';
import Shop from './Shop';
import { Customer } from './Customer';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
          <Carousal/>
          <Shop/>
          <Customer/>
        </div>
    </div>
  )
}

export default Homepage