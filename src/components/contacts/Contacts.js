import React from "react";
import "./Contacts.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7cods9b",
        "template_wt7f7ea",
        form.current,
        "NvEsRANAtKXgC1gQd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contac-icon" />
            <h4>Email</h4>
            <h5>yumagulovazu@gmail.com</h5>
            <a href="mailto:yumagulovazu@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contac-icon" />
            <h4>Messenger</h4>
            <h5>yumagulovazu@gmail.com</h5>
            <a
              href="https://m.me/profile.php?id=100000532831065"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contac-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+447467580511"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
