import React from 'react'
import Data from './Data.json'
import style from './homepage.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "none" ,display: "block", marginRight:"30px",color: "black",
        height: "2rem",
        marginRight: "1rem",
        width: "2rem",
        zIndex: 50,}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(props);
    return (
      <div
        className={className}
        style={{ ...style, display: "block",marginLeft:"30px",color: "black",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50,}}
        onClick={onClick}
      />
    );
  }
  
const Carousal = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        focusOnSelect: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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