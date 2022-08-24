import React from 'react'
import style from './homepage.module.css'
import Firstpart from './Firstpart';
import Carousal from './Carousal';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
          <Carousal/>
        </div>
    </div>
  )
}

export default Homepage