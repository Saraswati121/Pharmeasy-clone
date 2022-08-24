import React from 'react'
import style from './firstpart.module.css'
import Data from './Data.json'

const Firstpart = () => {
  return (
    <div>
        <div className={style.container}>
          {Data.image_data.map((el)=>(
            <div className={style.box} key={el.name}>
                <div className={style.image_box}>
                    <img src={el.image} alt="" />
                </div>
                <div className={style.text_box}>
                    <p>{el.name}</p>
                    <p className={style.text_box_red}>{el.discount}</p>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Firstpart