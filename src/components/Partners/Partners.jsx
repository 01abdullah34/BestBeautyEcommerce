import React from "react";
import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";

const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <a href="https://headandshoulders.com/en-us">
            <img src={brand1} alt="brand" className="w-[100px] dark:invert" />
          </a>
          <a href="https://www.dior.com/en_us">
            <img src={brand2} alt="brand" className="w-[90px] dark:invert" />
          </a>
          <a href="https://versedskin.com/">
            <img src={brand3} alt="brand" className="w-[160px] dark:invert" />
          </a>
          <a href="https://olaplex.com/">
            <img src={brand4} alt="brand" className="w-[160px] dark:invert" />
          </a>
          <a href="https://www.loreal.com/en/">
            <img src={brand5} alt="brand" className="w-[140px] dark:invert" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
