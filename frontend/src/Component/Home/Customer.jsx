import styles from "./customer.module.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Heading } from "@chakra-ui/layout";

// Get from a common component and distribute your code in constants.
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
        background: "#f2fff8",
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
        background: "#f2fff8",
        width: "3rem",
        zIndex: 50,
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}
const db = [
  {
    name: "Darpan Dholakia",
    date: "April 23, 2022",
    content:
      "Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work."
  },
  {
    name: "Lipi Chaudhuri",
    date: "April 15, 2022",
    content:
      "This app is a game changer for me. I am unable to go out always to buy medicinal products. Pharmeasy gives me the last liberty to shop essential healthcare products from home. The app is very user friendly and me being an elderly person do not find any difficulty in using it. They deliver well in time. Thanks😊"
  },
  {
    name: "Tirthankar Das Purkayastha",
    date: "April 23, 2022",
    content:
      "Very good app. Would recommend it to everyone requiring fast and efficient delivery of medicinal products at the doorstep."
  },
  {
    name: "Debanjan Roy",
    date: "April 18, 2022",
    content:
      "Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer."
  },
  {
    name: "Rohini Sarkar",
    date: "April 21, 2022",
    content:
      "Very helpful and friendly app in terms of usability, customer support & money saving from the point of medical necessity of every person."
  },
  {
    name: "Varun Sonagra",
    date: "April 23, 2022",
    content:
      "I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!"
  }
];

const Customer = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
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
    ],
  };
  return (
    <div className={styles.container}>
      <Heading size="md" m="1rem" style={{marginLeft:"17px"}}>
        What our customers have to say
      </Heading>

      <div>
        <Slider {...settings}>
          {db.map((el) => {
            return (
              <div className={styles.card} key={el.name}>
                <div className={styles.user}>
                  <p>
                    <b>{el.name}</b>
                  </p>
                  <p>{el.date}</p>
                </div>
                <div className={styles.message}>
                  <img
                    width="20px"
                    src="https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg"
                    alt=""
                  />
                  <p>{el.content}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export { Customer };