import React from 'react'
import Data from './Data.json'
import style from './homepage.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "3rem",
        marginRight: "1rem",
        background: "moccasin",
        width: "3rem",
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
        height: "3rem",
        marginRight: "1rem",
        background: "moccasin",
        width: "3rem",
        zIndex: 50,
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}
const Carousal = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive:[
          {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
          },
        ]
      };
  return (
    <div>
        <Slider {...settings}>
            
                    {Data.first_corausal.map((el)=>(
                      <div className={style.carousal}>
                        <img src={el.image} />
                      </div>
                    ))}
                    
               
            </Slider>
    </div>
  )
}

export default Carousal