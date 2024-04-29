import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/HairCare/hp-10.jpg";
import Img2 from "../../assets/product/HairCare/hp-14.jpg";
import Img3 from "../../assets/product/HairCare/hp-3.jpg";
import Img4 from "../../assets/product/PersonalCare/pp-4.jpg";
import Img5 from "../../assets/product/PersonalCare/pp-11.jpg";
import Img6 from "../../assets/product/Fragrances/fp-1.jpg";
import Img7 from "../../assets/product/Fragrances/fp-2.jpg";
import Img8 from "../../assets/product/Creams/cp-10.jpg";

const ProductsData = [
  {
    id: 10,
    img: Img1,
    title: "Plaine Products Conditioner",
    price: "34.99",
    aosDelay: "0",
  },
  {
    id: 14,
    img: Img2,
    title: "Augustinus Bader Cream",
    price: "19.99",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Suave Shampoo",
    price: "22.99",
    aosDelay: "400",
  },
  {
    id: 34,
    img: Img4,
    title: "Moisturizing Hand Lotion",
    price: "8.99",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 41,
    img: Img5,
    title: "Deodorant Roll-On",
    price: "15.99",
    aosDelay: "0",
  },
  {
    id: 61,
    img: Img6,
    title: "Dior Sauvage",
    price: "240.99",
    aosDelay: "200",
  },
  {
    id: 62,
    img: Img7,
    title: "Ralph Lauren Romance",
    price: "220.99",
    aosDelay: "400",
  },
  {
    id: 100,
    img: Img8,
    title: "Body Firming Butter",
    price: "15.99",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Best Sellers" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
