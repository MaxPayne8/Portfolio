import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if user has tried to submit

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { name, email, message } = formData;

    const errors = {
      name: name ? "" : "Name is required",
      email: validateEmail(email) ? "" : "Invalid email",
      message: message ? "" : "Message is required",
    };

    setFormErrors(errors);

    const isValid =
      name &&
      validateEmail(email) &&
      message &&
      !errors.name &&
      !errors.email &&
      !errors.message;
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set the form as submitted

    if (!isFormValid) {
      return; // Don't submit if the form is invalid
    }

    // Form submission logic can go here
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-[80%] mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div
          className="flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          <form
            action="https://getform.io/f/785424f0-724c-4702-8edc-69c42cfcdd72"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 bg-transparent border-2 rounded-md text-white ${
                formErrors.name && isSubmitted ? "border-red-500" : ""
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && isSubmitted && (
              <p className="text-red-500">{formErrors.name}</p>
            )}

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white ${
                formErrors.email && isSubmitted ? "border-red-500" : ""
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && isSubmitted && (
              <p className="text-red-500">{formErrors.email}</p>
            )}

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 bg-transparent border-2 rounded-md text-white ${
                formErrors.message && isSubmitted ? "border-red-500" : ""
              }`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {formErrors.message && isSubmitted && (
              <p className="text-red-500">{formErrors.message}</p>
            )}

            <button
              type="submit"
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md ${
                isFormValid
                  ? "hover:scale-110 duration-300"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
