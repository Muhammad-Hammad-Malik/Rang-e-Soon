import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [plan, setPlan] = useState("basic");
  const [remarks, setRemarks] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "country_code":
        setCountryCode(value);
        break;
      case "plan":
        setPlan(value);
        break;
      case "remarks":
        setRemarks(value);
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Construct the message
    const message = `Phone: ${countryCode}${phone}\nPlan: ${plan}\nRemarks: ${remarks}`;

    // Clear the form fields immediately
    setName("");
    setPhone("");
    setCountryCode("+92");
    setPlan("basic");
    setRemarks("");
    setSuccessMessage("Your message has been sent successfully!");

    // Send the email
    emailjs
      .send(
        "service_djcj0ix", // Replace with your service ID
        "template_ani5rti", // Replace with your template ID
        {
          from_name: name,
          to_name: "Hammad", // Your name
          message: message,
        },
        "ehkl8if1iTrFj-cil" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section className="section__container contact__container" id="contact">
      <h2 className="section__header">Contact Us</h2>
      <form className="contact__form" onSubmit={sendEmail}>
        <div className="form__group">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Enter your full name"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone Number:</label>
          <div className="phone__input">
            <select
              id="country_code"
              name="country_code"
              value={countryCode}
              onChange={handleChange}
            >
              <option value="+92">+92</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              placeholder="Enter your Phone Number"
            />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="plan">Plan:</label>
          <select
            id="plan"
            name="plan"
            value={plan}
            onChange={handleChange}
            required
          >
            <option value="basic">Basic</option>
            <option value="deluxe">Deluxe</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="remarks">Additional Remarks:</label>
          <textarea
            id="remarks"
            name="remarks"
            placeholder="Ask any queries here"
            rows="4"
            value={remarks}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn contact__btn">
          Submit
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </section>
  );
}
