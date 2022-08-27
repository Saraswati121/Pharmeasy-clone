import React from "react";
import style from "./concern.module.css";
import Data from "./Data.json";
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
        borderRadius: "50%",
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
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Concern = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 7, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 7, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <div>
      <div className={style.container}>
        <h2 className={style.container_text}>Shop by Concern</h2>
        <p className={style.container_text2}>Products are handpicked by experts</p>
        <div className={style.sub_container}>
          <Slider {...settings}>
            {Data.shop_by_concern.map((el) => (
              <div key={el.title} className={style.image_box}>
                <div className={style.image}>
                  <img src={el.image} alt={el.title} />
                </div>
                <div className={style.text}>
                  <p>{el.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Concern;
