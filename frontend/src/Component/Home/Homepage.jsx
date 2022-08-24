import React from 'react'
import style from './homepage.module.css'
import Firstpart from './Firstpart';
const Homepage = () => {
  return (
    <div>
        <div className={style.main_container}>
          <Firstpart/>
        </div>
    </div>
  )
}

export default Homepage