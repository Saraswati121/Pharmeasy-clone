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
import Labtest from './Labtest';
import Featurebrand from './Featurebrand';
import Offer from './Offer';
import Payment from './Payment';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
          <Carousal/>
          <Shop/>
          <Newlaunches/>
          <Labtest/>
          <Trending/>
          <Choose/>
          <Sliderr/>
          <Payment/>
          <Health/>
          <Featurebrand/>
          <Offer/>
          <Customer/>
        </div>
    </div>
  )
}

export default Homepage