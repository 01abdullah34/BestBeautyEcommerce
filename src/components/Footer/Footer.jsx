import React from "react";
import logo from "./logo.png";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              <img src={logo} alt="Logo" />
            </a>
            <p className="text-gray-600 dark:text-white/70 pt-3">
              Welcome to Best Beauty Shop!
            </p>
            <p className="text-gray-500 mt-4">
              Indulge in a world of beauty possibilities at Best Beauty Shop
              today!
            </p>
          </div>

          {/* Footer links */}
          <div className="text-gray-600 col-span-2 grid grid-cols-3 sm:grid-cols-2">
            {/* Links */}
            <div className=" py-8 px-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 flex flex-col justify-center items-center">
              <div>
                <h1 className="text-gray-600 text-xl font-bold mb-3 ">
                  Address
                </h1>

                <div className="text-gray-350 flex items-center justify-center gap-3">
                  <FaLocationArrow />
                  <p>Houston, Texas</p>
                </div>
                <div className="text-gray-350 flex items-center justify-center  gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+1 3838383388</p>
                </div>

                {/* social links */}
                <div className="text-gray-350 flex items-center justify-center  gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
