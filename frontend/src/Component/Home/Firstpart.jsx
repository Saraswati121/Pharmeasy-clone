import React from 'react'
import style from './firstpart.module.css'
let data = [
    {image:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",name:"Medicine",discount:"Upto 50% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",name:"LabTest",discount:"Upto 70% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",name:"Health Care",discount:"Upto 60% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",name:"Health Blogs",discount:""},
    {image:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",name:"Plus",discount:"SAVE 5% EXTRA"},
    {image:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",name:"Offers",discount:""},
    {image:"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",name:"Surgeries",discount:""},
    {image:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",name:"Value",discount:"Upto 50% OFF"},
]
const Firstpart = () => {
  return (
    <div>
        <div className={style.container}>
          {data.map((el)=>(
            <div className={style.box} key={el.name}>
                <div className={style.image_box}>
                    <img src={el.image} alt="" />
                </div>
                <div className={style.text_box}>
                    <p>{el.name}</p>
                    <p>{el.discount}</p>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Firstpart