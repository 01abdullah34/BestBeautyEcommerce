import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/shampoo.png";
import Image2 from "../../assets/category/deodorant.png";
import Image3 from "../../assets/category/parfume.png";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";

// Arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: "block", zIndex: 50 }}
      onClick={onClick}
    >
      <div className="triangle-right"></div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style, display: "block", zIndex: 50 }}
      onClick={onClick}
    >
      <div className="triangle-left"></div>
    </div>
  );
}

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Hair Care",
    title: "Shampoos",
    title2: "& More...",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Personal Care",
    title: "Deodorant",
    title2: "& More...",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Fragrance",
    title: "Parfume",
    title2: "& More...",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate("/shop");
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleNavigateToShop}
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="image-container"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="hero-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
