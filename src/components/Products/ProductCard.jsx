import React from "react";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const goToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover button for adding to cart */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                {/* Button for going to product page */}
                <Button
                  text={"Go to Product"}
                  bgColor={"bg-secondary"}
                  textColor={"text-white"}
                  handler={() => goToProduct(product.id)}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{product.title}</h2>
              <h2 className="font-bold">${product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
