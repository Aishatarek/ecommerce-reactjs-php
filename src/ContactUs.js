import React, { Component, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function ContactUs() {
  const form = useRef();
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  const sendEmail = (e) => {
    alert("Message sent successfully");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9it9cvs",
        "template_ixs2nke",
        form.current,
        "MC28kuUmfLdyp7aGH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg="5" md="5" sm="5" className="sec1contact">
            <h3>Contact Info</h3>
            <div className="d-flex m-2">
              <div className="iconcontact">
                <FiPhoneCall />
              </div>
              <div>
                <h5>{t("Phone")}:</h5>
                <p>+20 111 111 1111 / +20 111 111 1111</p>
              </div>
            </div>
            <div className="d-flex m-2">
              <div className="iconcontact">
                <AiOutlineMail />
              </div>
              <div>
                <h5>{t("Email")}:</h5>
                <p>Info@arrowhitech.com / Fax@arrowhitech.com</p>
              </div>
            </div>
            <div className="d-flex m-2">
              <div className="iconcontact">
                <VscLocation />
              </div>
              <div>
                <h5>{t("Address")}:</h5>
                <p>{t("Addressb")}</p>
              </div>
            </div>
          </Col>
          <Col lg="7" md="7" sm="7" className="paddd">
            <img
              className="imgycontact"
              src="images/contact.jpeg"
              alt=""
            />
          </Col>
        </Row>

        <section className="formcontacttt">
          <Row className="align-items-center">
            <Col lg="9" md="9" sm="9" className="paddd">
              <form  ref={form} onSubmit={sendEmail} className="formmcontact ">
                <h3>{t("Sendmessage")}</h3>
                <input type="text" placeholder={t("Name")} name="name"/>
                <input type="email" placeholder={t("Email")} name="email"/>
                <input type="tel" placeholder={t("Phone")} name="phone"/>
                <input type="text" placeholder={t("Content")} name="message" />
                <input type="submit" value={t("SendMessage")} />
              </form>
            </Col>
            <Col lg="3" md="3" sm="3" className="paddd">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1633651827679!5m2!1sen!2seg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
