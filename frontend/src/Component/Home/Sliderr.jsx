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
        height: "2rem",
        marginRight: "1rem",
        background: "moccasin",
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
        background: "moccasin",
        width: "2rem",
        zIndex: 50,
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}
const Sliderr = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 4,
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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
    ]
  };
  return (
    <div>
        <Slider {...settings}>
            
            {Data.slide_images.map((el)=>(
              <div className={style.carousal_second} key={el.image}>
                <img src={el.image} />
              </div>
            ))}
            
       
    </Slider>
    </div>
  )
}

export default Sliderr