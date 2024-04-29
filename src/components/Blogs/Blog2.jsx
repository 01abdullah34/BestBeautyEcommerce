import React, { useEffect } from "react";
import Img from "../../assets/blogs/blog2img1.jpg";
import Img2 from "../../assets/blogs/blog2img2.jpg";

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
            How to choose the perfect Fragrance
          </h1>
          <p>
            To select the ideal fragrance, consider your preferences, test
            different scents on your skin, pay attention to the fragrance notes,
            evaluate the longevity, and embrace the emotional connection it
            evokes. Fragrance is a deeply personal choice, reflecting your
            personality, mood, and style. Consider whether you lean towards
            floral, woody, citrus, or oriental scents. Your preferences are the
            compass guiding you towards your signature scent.
          </p>
          <br />
          <p>
            Your skin is a canvas waiting to be adorned with the perfect
            fragrance. Test different scents on your skin to experience how they
            interact with your body chemistry. What smells divine on a blotter
            may transform into something entirely different on your skin. Let
            your skin be the ultimate judge.
          </p>
          <br />
          <p>
            Fragrances are composed of layers, known as notes. Pay attention to
            these notes as they unfold over time. Top notes tantalize your
            senses upon initial application, followed by heart notes that form
            the fragrance's core.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 px-4 mb-4 flex justify-center items-center">
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
              A fragrance that fades too quickly is like a melody cut short.
              Evaluate the longevity of a scent by observing how it evolves
              throughout the day. Does it endure from dawn till dusk, or does it
              vanish into the ether too soon? Seek fragrances with staying
              power, ones that linger like a whispered promise.
            </p>
            <br />
            <p>
              Fragrance is more than just a scent; it's an emotion captured in a
              bottle. Let it transport you to distant memories, evoke feelings
              of joy, confidence, or serenity, and express facets of your
              personality words cannot capture. Choose a fragrance that speaks
              to your heart and soul.
            </p>
            <br />
            <p>
              In the quest for the perfect fragrance, let your preferences guide
              you, your skin be the canvas, the notes compose the symphony, the
              longevity tell the tale, and the emotion seal the connection. With
              each spritz, unveil the essence of you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
