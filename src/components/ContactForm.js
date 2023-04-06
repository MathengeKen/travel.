import "./ContactFormStyles.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContactForm1() {
  return (
    <div className="contact">
      <div class="content">
        <h2>Contact Us</h2>
        <p>
          "Hey, we know you have a lot of questions, comments, and concerns, and
          we're here to help! Our team of highly trained customer support agents
          (okay, they're not that highly trained, but they are very friendly) is
          standing by to assist you with anything you need. Whether you need
          help with your order, want to tell us a joke, or just need someone to
          vent to about your cat's weird behavior, we're all ears (and
          occasionally tails, but that's a long story). So drop us a line, shoot
          us an email, or send us a carrier pigeon (preferably a well-trained
          one) and we'll get back to you as soon as possible!"
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <FaMapMarkerAlt className="emblem" />
            <div className="text">
              <h3>Address</h3>
              <p>01000 Waiyaki Way, Westlands</p>
            </div>
          </div>
          <div className="box">
            <BsFillTelephoneFill className="emblem" />
            <div className="text">
              <h3>Phone</h3>
              <p>507-475-6094</p>
            </div>
          </div>
          <div className="box">
            <AiOutlineMail className="emblem" />
            <div className="text">
              <h3>Email</h3>
              <p>tourisus@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form className="inputBox">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="submitBtn"> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm1;
