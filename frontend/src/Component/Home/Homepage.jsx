import React from 'react'
import style from './homepage.module.css'
import Firstpart from './Firstpart';
import Carousal from './Carousal';
import Shop from './Shop';
import { Customer } from './Customer';
import Newlaunches from './Newlaunches';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
          <Carousal/>
          <Shop/>
          <Newlaunches/>
          <Customer/>
        </div>
    </div>
  )
}

export default Homepage