import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { IoChatbox } from "react-icons/io5";

function Footer(){
    const { t } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language, (err, t) => {
        if (err) return console.log("Error loading language:", err);
        console.log("Language changed to:", language);
      });
    };
    return (
      <>
      <Link to="/Chatbot" className="Chatbot">
        <IoChatbox />
      </Link>
      <footer>
        <Container>
          <Row>
            <Col lg="2" md="2" sm="12">
              <Link to="/">
                
                <h3>{t("Home")}</h3>
              </Link>
              <Link to="/AboutUs">
                
                <p>{t("About")}</p>
              </Link>
              <Link to="/ContactUs">
                
                <p>{t("contact")}</p>
              </Link>
              <Link to="/Productss">
                
                <p>{t("shop")}</p>
              </Link>
              <Link to="/Blog">
                
                <p>{t("blog")}</p>
              </Link>
            </Col>
            <Col lg="2" md="2" sm="12">
              <Link to="/Faqs">
                
                <h3>{t("faq")}</h3>
              </Link>
              <Link to="/Faqs">
                
                <p>{t("Tracking")}</p>
              </Link>
              
              <Link to="/Faqs">
                
                <p>{t("Privacy")}</p>
              </Link>
              <Link to="/Faqs">
                
                <p>{t("Terms")}</p>
              </Link>
            </Col>
            <Col lg="3" md="3" sm="12">
              <h3>{t("Follow")}</h3>
              <p>{t("FreeShipping")}</p>
              <div className="divicons">
                <Link to="#">
                  
                  <div>
                    <FaFacebookF />
                  </div>
                </Link>
                <Link to="#">
                  
                  <div>
                    <AiOutlineTwitter />
                  </div>
                </Link>
                <Link to="#">
                  
                  <div>
                    <GrPinterest />
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg="5" md="5" sm="12">
              <h3>{t("Signup")}</h3>
              <p>
              {t("first")}
              </p>
              <form>
                <input type="email" placeholder={t("Youremail")} />
                <input type="submit" value={t("subscribe")} />
              </form>
            </Col>
          </Row>
        </Container>
      </footer>
      
      
      
      </>
    );
  
}

export default Footer;
