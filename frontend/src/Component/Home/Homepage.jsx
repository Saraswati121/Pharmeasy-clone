import React from 'react'
import style from './homepage.module.css'
import Firstpart from './Firstpart';
import Carousal from './Carousal';
import Shop from './Shop';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
          <Carousal/>
          <Shop/>
        </div>
    </div>
  )
}

export default Homepage