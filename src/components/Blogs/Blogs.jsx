import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Shared/Heading";

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect shampoo",
    subtitle:
      "To choose the perfect shampoo, consider your hair type, scalp condition, ingredients, fragrance preference, product reviews, and experiment with different options to find the best fit.",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to selecting the ideal fragrance",
    subtitle:
      "To select the ideal fragrance, consider your preferences, test different scents on your skin, pay attention to the fragrance notes, evaluate the longevity and sillage, and choose a fragrance that complements your personality and style.",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect body cream",
    subtitle:
      "To find the perfect body cream, consider your skin type and concerns, look for ingredients like hydrating oils or moisturizers tailored to your needs, test the product on a small patch of skin, read reviews for effectiveness, and choose a scent and texture that you enjoy.",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 cursor-pointer">
          {/* Blog card */}
          {BlogData.map((data, index) => (
            <Link key={data.title} to={`/blog/${index + 1}`}>
              {/* Link each blog image to a new page */}
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="bg-white dark:bg-gray-900"
              >
                {/* image section */}
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                  />
                </div>
                {/* content section */}
                <div className="space-y-2">
                  <p className="font-bold line-clamp-1">{data.title}</p>
                  <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
