import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail1_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "219281f6-4331-43e3-b7f9-17aff32552ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact fromo find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provider exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail1_icon} alt="" />
            sohelshaikh30611@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +91 9619497131
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            Ghansoli Navi-Mumbai, India 400701
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
