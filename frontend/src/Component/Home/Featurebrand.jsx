import React from 'react'
import style from './feature.module.css'
import Data from './Data.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Fetch from a common nextArrow component
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          height: "2rem",
          marginRight: "1rem",
          width: "2rem",
          zIndex: 50,
          borderRadius:"50%"
        }}
        onClick={onClick}
      />
    );
  }
    
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          height: "2rem",
          marginRight: "1rem",
          width: "2rem",
          zIndex: 50,
          borderRadius:"50%"
        }}
        onClick={onClick}
      />
    );
  }
  

const Featurebrand = () => {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive:[
          {
            breakpoint: 480,
            settings: { slidesToShow: 4, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 6, slidesToScroll: 1 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 6, slidesToScroll: 1 },
          },
        ]
      };
  return (
    <div>
        <div className={style.container}>
         <h2 className={style.container_text} >Feature Brands</h2>
         <div className={style.sub_container}>
          <Slider {...settings}>
          {
              Data.feature_brands.map((el)=>(
                <div key={el.title} className={style.image_box}>
                  <div className={style.image}>
                  <img src={el.image} alt={el.title} />
                  </div>
                  <div className={style.text}>
                  <p >{el.title}</p>
                  </div>
                </div>
               
              ))
            }
          </Slider>
            
         </div>
      </div>
    </div>
  )
}

export default Featurebrand