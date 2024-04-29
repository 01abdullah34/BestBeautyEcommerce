import React, { useEffect } from "react";
import Img from "../../assets/blogs/blog1img1.jpg";
import Img2 from "../../assets/blogs/blog1img2.jpg";

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
            How to choose the perfect Shampoo
          </h1>
          <p>
            To choose the perfect shampoo, consider your hair type, scalp
            condition, ingredients, fragrance preference, product reviews, and
            experiment with different options to find the best fit. Your hair
            type plays a significant role in determining the type of shampoo
            that will work best for you. For instance, if you have oily hair,
            you may benefit from a clarifying shampoo that helps remove excess
            oil and buildup. Conversely, if you have dry hair, a moisturizing
            shampoo enriched with hydrating ingredients like coconut oil or shea
            butter may be more suitable.
          </p>
          <br />
          <p>
            Additionally, take into account your scalp condition. If you have a
            sensitive scalp or are prone to dandruff, look for shampoos
            formulated specifically for these concerns, such as those containing
            soothing ingredients like tea tree oil or salicylic acid.
          </p>
          <br />
          <p>
            Ingredients are another crucial factor to consider when choosing a
            shampoo. Opt for products that are free from harsh chemicals like
            sulfates, parabens, and silicones, as these can strip the hair of
            its natural oils and cause damage in the long run. Instead, look for
            gentle, nourishing ingredients like botanical extracts, vitamins,
            and proteins.
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
              Fragrance preference is also a personal consideration. Some people
              prefer lightly scented shampoos, while others may prefer
              fragrance-free options. Keep in mind that heavily fragranced
              shampoos may irritate sensitive skin or trigger allergies in some
              individuals. Finally, don't be afraid to experiment with different
              shampoos until you find the perfect match for your hair. Consider
              factors like lather consistency, how easily the shampoo rinses
              out, and how your hair feels after washing. By taking these
              factors into account, you can choose a shampoo that cleanses,
              nourishes, and enhances the health and appearance of your hair.
            </p>
            <br />
            <p>
              Understanding your hair type is paramount. Is it oily, dry, or
              somewhere in between? Each hair type requires specific care. Oily
              hair may benefit from clarifying shampoos that remove excess oil,
              while dry locks crave the nourishment of moisturizing formulas
              infused with hydrating ingredients like coconut oil or shea
              butter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
