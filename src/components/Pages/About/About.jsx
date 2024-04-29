import React, { useState } from "react";
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setResult("Sending...");
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you for contacting us!");
        event.target.reset(); // Resets the form fields after successful submission
      } else {
        setResult("Failed to send message: " + data.message);
      }
    } catch (error) {
      setResult(
        "An error occurred while sending the message: " + error.toString()
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.aboutSection}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>About Us</h1>
          <p className={styles.aboutText}>
          Welcome to Best Beauty Shop, your ultimate destination for all
            things beauty and self-care. At Best Beauty Shop, we believe that
            feeling confident and radiant in your own skin is a journey worth
            investing in. Our curated selection of premium beauty and self-care
            products is designed to empower you to look and feel your best,
            inside and out.
          </p>
          <p className={styles.aboutText}>
          Whether you're seeking skincare essentials to pamper your skin,
            luxurious haircare products for luscious locks, or indulgent bath
            and body treats for a relaxing escape, we've got you covered. With a
            focus on quality, efficacy, and sustainability, we strive to offer a
            carefully curated collection that caters to your unique needs and
            preferences. Join us on this journey of self-discovery and
            self-care, and let Best Beauty Shop be your trusted partner in
            enhancing your natural beauty and nurturing your well-being.
          </p>
        </div>
        <div className={styles.contactFormContainer}>
          <form onSubmit={onSubmit} method="POST" className={styles.contactForm}>
            <input type="hidden" name="access_key" value="8db7da3c-4718-4b9f-9537-0eaa903d09f8" />
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Contact Us</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.inputField}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputField}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your issues..."
              className={styles.textArea}
              required
            ></textarea>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
          </form>
          <span className={styles.resultMessage}>{result}</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6935.063795569457!2d-95.58823009999999!3d29.646335999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7bdd9823c57%3A0x4e335dcbd1aa4825!2sNorth%20American%20University%20(NAU)!5e0!3m2!1sen!2sus!4v1713555199320!5m2!1sen!2sus"
          className={styles.mapFrame}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
