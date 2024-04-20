import React from "react";
import { GiPartyPopper } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import Footer from "./Footer";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function AboutUs() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <div>

      <section className="aboutsec1">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <img src="images/bg-about05.png" alt="" />
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="div1about">
                <h3>09</h3>
                <div>
                  <GiPartyPopper />
                  <p>
                  {t("YEARS")} <br /> {t("EXPERIENCE")}
                  </p>
                </div>
              </div>
              <h3>
              {t("Peaceproviding")}
              </h3>
              <p>
                {t("worked")}
              </p>
              <p>
                {t("Pleasebrowse")}
              </p>
              <p>
                {t("bestservices")}
              </p>
              <button>{t("ContactUs")}</button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutsec2">
        <Container>
          <h3>{t("Responsible")}</h3>
          <Row className="justify-content-between">
            <Col lg="4" md="4" sm="12" className="divmainsec2">
              <div>
                <div className="divsec2222">
                  <img src="images/noun_Vision_995437.png" alt="" />
                </div>
                <h3>{t("OurVision")}</h3>
                <p>- {t("GoodService")}</p>
                <p>- {t("ForCommunity")}</p>
                <p>- {t("LongDevelopment")}</p>
                <p>- {t("SavePlanet")}</p>
                <p>- {t("HelpPeople")}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12" className="divmainsec2">
              <div>
                <div className="divsec2222">
                  <img src="images/noun_goal_2805632.png" alt="" />
                </div>
                <h3>{t("OurMision")}</h3>
                <p>- {t("ChangeHabits")}</p>
                <p>- {t("BestQuality")}</p>
                <p>- {t("ThinkBigger")}</p>
                <p>- {t("Stability")}</p>
                <p>- {t("Safer")}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12" className="divmainsec2">
              <div>
                <div className="divsec2222">
                  <img src="images/noun_Pinky Promise_4103302.png" alt="" />
                </div>
                <h3>{t("Promise")}</h3>
                <p>- {t("SustainableRelationship")}</p>
                <p>- {t("RenewCommitment")}</p>
                <p>- {t("ProvideSolution")}</p>
                <p>- {t("ProfitableRelationship")}</p>
                <p>- {t("AdaptNeeds")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutsec3">
        <Container>
          <Row>
            <Col lg="2" md="2" sm="12">
              <img src="images/noun_Art_2035634.png" alt="" />
              <p>{t("Design")}</p>
            </Col>
            <Col lg="2" md="2" sm="12">
              <img src="images/noun_Sewing Machine_4266660.png" alt="" />
              <p>{t("Technology")}</p>
            </Col>
            <Col lg="2" md="2" sm="12">
              <img src="images/noun_Delivery Bike_1367906.png" alt="" />

              <p>{t("Shipping")}</p>
            </Col>
            <Col lg="2" md="2" sm="12">
              <img src="images/noun_Problem Solving_3239817.png" alt="" />

              <p>{t("Problemsolving")}</p>
            </Col>
            <Col lg="2" md="2" sm="12">
              <img src="images/noun_Policies_3146996.png" alt="" />

              <p>{t("Policy")}</p>
            </Col>
            <Col lg="2" md="2" sm="12" className="mmmm">
              <img src="images/noun_User_292100.png" alt="" />

              <p>{t("Integration")}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutsec4">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="12">
              <div className="sec4divabout">
                <img src="images/team1-1.jpg" alt="" />
              </div>
              <div className="sec4div2about">
                <div>
                  <h3>Ahmed</h3>
                  <p>{t("Headdesign")}</p>
                </div>
                <div className="parenticon">
                  <div className="ppppp">
                    <p>+</p>
                  </div>
                  <div className="piconsss">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <GrPinterest />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="sec4divabout">
                <img src="images/team1.jpg" alt="" />
              </div>
              <div className="sec4div2about">
                <div>
                  <h3>Christina</h3>
                  <p>{t("Headdesign")}</p>
                </div>
                <div className="parenticon">
                  <div className="ppppp">
                    <p>+</p>
                  </div>
                  <div className="piconsss">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <GrPinterest />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="sec4divabout">
                <img src="images/team2.jpg" alt="" />
              </div>
              <div className="sec4div2about">
                <div>
                  <h3>Mohamed</h3>
                  <p>{t("Headdesign")}</p>
                </div>
                <div className="parenticon">
                  <div className="ppppp">
                    <p>+</p>
                  </div>
                  <div className="piconsss">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <GrPinterest />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="sec4divabout">
                <img src="images/team3.jpg" alt="" />
              </div>
              <div className="sec4div2about">
                <div>
                  <h3>Mahmoud</h3>
                  <p>{t("Headdesign")}</p>
                </div>
                <div className="parenticon">
                  <div className="ppppp">
                    <p>+</p>
                  </div>
                  <div className="piconsss">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <GrPinterest />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutsec5">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
    
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="sliderabout"
        >
          <SwiperSlide>
            <div className="divsliderr">
              <img src="images/avatar-tes2.jpg" alt="" />
              <p>
               {t("Thankyou")}
              </p>
              <h5>
                <span>Christina</span> / {t("Headdesign")}
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="divsliderr">
              <img src="images/avatar-tes3.jpg" alt="" />

              <p>
              {t("Welove")}
              </p>
              <h5>
                <span>Mary Jane</span> / {t("Headdesign")}
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="divsliderr">
              <img src="images/avatar-tes.jpg" alt="" />

              <p>
              {t("Welove")}
              </p>
              <h5>
                <span>Bonnie</span> / {t("Headdesign")}
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="divsliderr">
              <img src="images/azamat-zhanisov.jpg" alt="" />
              <p>
               {t("Thankyou")}
              </p>
              <h5>
                <span>Christina</span> / {t("Headdesign")}
              </h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
