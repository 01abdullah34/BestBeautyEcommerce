import React, { useEffect } from "react";
import Img from "../../assets/blogs/blog3img1.jpg";
import Img2 from "../../assets/blogs/blog3img2.jpg";

const BlogPage = () => {
  useEffect(() => {
    // Delay the scroll to top to ensure all elements have been rendered
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <h1 className="text-3xl font-bold mb-4">
            How to choose the perfect Body Cream
          </h1>
          <p>
            To find the perfect body cream, consider your skin type and
            concerns, look for ingredients like hydrating oils or moisturizers
            tailored to your needs. If you have dry skin, opt for rich creams
            infused with shea butter or cocoa butter to deeply nourish and
            hydrate. These luxurious ingredients penetrate deep into the skin,
            restoring moisture and leaving it feeling supple and smooth. For
            those with oily or combination skin, lightweight, non-comedogenic
            formulas are preferable to avoid clogging pores and causing
            breakouts. Look for water-based moisturizers that provide hydration
            without greasiness, helping to balance moisture levels without
            exacerbating oiliness.
          </p>
          <br />
          <p>
            In addition to considering your skin type, it's essential to pay
            attention to any specific skin concerns you may have. If you
            struggle with sensitivity or conditions like eczema or psoriasis,
            seek out body creams formulated with gentle, soothing ingredients
            such as aloe vera, colloidal oatmeal, or ceramides.
          </p>
          <br />
          <p>
            These ingredients help to calm inflammation, relieve itchiness, and
            strengthen the skin's natural barrier function, promoting overall
            skin health. Similarly, if you're looking to address signs of aging,
            opt for body creams enriched with antioxidants like vitamins C and
            E, as well as peptides and retinoids, which help to firm the skin,
            reduce the appearance of fine lines and wrinkles, and improve
            texture and tone.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4 flex justify-center items-center">
          <img
            src={Img}
            alt="First Image"
            className="w-full rounded-lg"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <img src={Img2} alt="Second Image" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4 flex justify-center items-center">
          <div>
            <p>
              Texture and fragrance are also important factors to consider when
              selecting the perfect body cream. Some may prefer lightweight
              lotions that absorb quickly into the skin, while others may enjoy
              the indulgent richness of thicker creams that provide intense
              hydration. Additionally, fragrance preference is highly personal;
              some may prefer subtle, natural scents, while others may gravitate
              towards more fragrant options. Be mindful of potential irritants
              in fragrances, especially if you have sensitive skin or allergies.
            </p>
            <br />
            <p>
              Ultimately, the perfect body cream should not only moisturize
              effectively but also provide a sensorial experience that enhances
              your skincare routine, leaving you feeling pampered and
              rejuvenated with every application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
