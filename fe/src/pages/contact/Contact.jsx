import "./contact.scss";
import { Helmet } from "react-helmet-async";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
function Contact() {
  const form = useRef();

  function alert() {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mesaj göndərildi!",
      showConfirmButton: true,
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hcsxcqn", "template_ywxdiq8", form.current, {
        publicKey: "SImAoA7fvTpyIwPG4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title> Paw&Co/Contact </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="contactMain">
        <div className="contact">
          <div className="contactLeft">
            <h3 className="contactHeading">Paw&Co</h3>
            <div className="contactLeftBox">
              <i id="contactIcon" className="fa-solid fa-location-dot"></i>
              <p>Bakı şəhəri, 23 Akademik Zahid Xəlilov küçəsi,1148</p>
            </div>

            <div className="contactLeftBox">
              <i id="contactIcon" className="fa-solid fa-phone"></i>
              <p>+1(123)-456-7890</p>
            </div>

            <div className="contactLeftBox">
              <i id="contactIcon" className="fa-solid fa-envelope"></i>
              <p>paw&co@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <section className="contactSec">
        <div className="contactSecLeft">
          <div className="contact-form">
            <span className="heading">Bizimlə əlaqə</span>
            <form ref={form} onSubmit={sendEmail}>
              <label for="name">Ad:</label>
              <input type="text" required="" name="user_name" />
              <label for="email">Email:</label>
              <input type="email" id="email" name="user_email" required="" />
              <label for="message">Message:</label>
              <textarea id="message" name="message" required=""></textarea>
              <button type="submit" value={"Send"}>
                Göndər
              </button>
            </form>
          </div>
        </div>
        <div className="contactSecRight">
          <img
            style={{ width: "100%", height: "600px" }}
            src="https://preview.colorlib.com/theme/petsitting/images/img.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
