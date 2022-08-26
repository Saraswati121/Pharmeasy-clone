import React from 'react'
import style from './homepage.module.css'
import Firstpart from './Firstpart';
import Carousal from './Carousal';
import Shop from './Shop';
import { Customer } from './Customer';
import Newlaunches from './Newlaunches';
import Trending from './Trending';
import { Choose } from './Choose';
import Health from './Health';
import Sliderr from './Sliderr';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
          <Carousal/>
          <Shop/>
          <Newlaunches/>
          <Trending/>
          <Choose/>
          <Sliderr/>
          {/* <Health/> */}
          <Customer/>
        </div>
    </div>
  )
}

export default Homepage