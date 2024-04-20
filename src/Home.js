import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImEye } from "react-icons/im";
import { MdMore } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import Footer from "./Footer";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/categories/readAll.php"
    );
    setCategory(result.data);
  };
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <div>
      <section className="fslider">
        <Swiper
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: "url('images/slide0.webp')" }}>
            <div className="firstslide">
              <h3 className="slideh3">{t("Spring")}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url('images/slide1.webp')" }}>
            <div className="secondslide">
              <h3 className="slideh3">{t("Clearance")}</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="sec2">
        <Container>
          <Row>
            {categories.map((category) => (
              <Col lg="3" md="6" sm="12">
                <div>
                <Link to="/Productss">
                  <div className="divsec2">
                    <img
                      src={
                        "http://localhost/ecommerce_graduation/uploads/categories/" +
                        category.img
                      }
                      alt=""
                    />
                  </div>

                  <div className="flexy">
                    <h3>
                      {t("dir") == "ltr" ? category.title : category.title_ar}
                    </h3>
                  </div>
                  </Link>

                </div>
              </Col>
            ))}
          </Row>
        </Container>
        
      </section>
      <section className="sec3">
        <Container>
          <div className="flexy2">
            <h3>{t("BestSelling")}</h3>
            <p>{t("BestSellingb")}</p>
          </div>
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
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <div className="divsec3">
                  <img src="images/Layer-142_900x.jpg" alt="" />
                </div>
              </div>
              <div className="divflexy3">
                <div>
                  <p>{t("hoody")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="divsec3">
                <img src="images/Untitled-2_360x.jpg" alt="" />
              </div>
              <div className="divflexy3">
                <div>
                  <p>{t("hoody")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="divsec3">
                <img src="images/Layer-141-1000x1280_540x.jpg" alt="" />
              </div>
              <div className="divflexy3">
                <div>
                  <p>{t("hoody")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="divsec3">
                <img src="images/Untitled-1_1512x.png" alt="" />
              </div>
              <div className="divflexy3">
                <div>
                  <p>{t("hoody")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="divsec3">
                <img
                  src="images/6348644205_1_1_3-removebg-2_7318ae17-ed9d-4705-9bcd-bbcded4b59db_360x.png"
                  alt=""
                />
              </div>
              <div className="divflexy3">
                <div>
                  <p>{t("hoody")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="divsec3">
                <img src="images/Layer-134_540x.jpg" alt="" />
              </div>
              <div className="divflexy3">
                <div>
                  <p>{t("hoody")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
        <button className="divbuttonsec3">{t("AllProducts")}</button>
      </section>
      <section className="sec4">
        <Container>
          <Row className="justify-content-between">
            <Col lg="8" md="8" sm="12" className="div1sec4">
              <div className="div11sec4">
                <h5>{t("MERRY")}</h5>
                <h4>{t("Christmas")}</h4>
                <div className="flexywrite">
                  <h3>40</h3>
                  <div>
                    <p>%</p>
                    <p className="ptwo">{t("Off")}</p>
                  </div>
                </div>
                <Link to="/Productss">
                <button>{t("ShopNow")}</button>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12" className="div2sec4">
              <div className="div11sec4">
                <h5>{t("YourNext")}</h5>
                <h4>{t("Purchase")}</h4>
                <div className="flexywrite">
                  <h3>10</h3>
                  <p> % {t("Off")}</p>
                </div>
                <Link to="/Productss">
                <button>{t("ShopNow")}</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sec5">
        <Container>
          <h3 className="sec5h3">{t("TrendingOutfits")}</h3>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="allcategory">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src="images/6350552300_1_1_1-1_80x.jpg" alt="" />

                  <div>
                    <h3>
                    {t("AnorakJacket")}
                      <br />
                      LE 22.00
                    </h3>
                    <p>{t("viewdetails")}</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>
              <div className="allcategory2">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src="images/0150220428_1_1_3_80x.jpg" alt="" />

                  <div>
                    <h3>
                    {t("WideLegJeans")}
                      <br />
                      LE 98.00
                    </h3>
                    <p>{t("viewdetails")}</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>

              <img src="images/Layer-14-2_540x.jpg" alt="" />

              <div className="divflexy3">
                <div>
                  <p>{t("AnorakJacket")}</p>
                  <h3>300.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12">
              <div className="allcategory3">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img
                    src="images/minimalist-img-5_a1455f0b-6b39-4c34-a1ce-ff3aa62e53af_80x.jpg"
                    alt=""
                  />

                  <div>
                    <h3>
                    {t("QuiltedJacket")}
                      <br />
                      LE 99.00
                    </h3>
                    <p>{t("viewdetails")}</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>
              <div className="allcategory4">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src="images/0248251428_1_1_3_80x.jpg" alt="" />

                  <div>
                    <h3>
                    {t("BalloonJeans")}
                      <br />
                      LE 299.00
                    </h3>
                    <p>{t("viewdetails")}</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>

              <img src="images/Layer-141-1000x1280_540x (1).jpg" alt="" />

              <div className="divflexy3">
                <div>
                  <p> {t("QuiltedJacket")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12">
              <div className="allcategory5">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src="images/6703777712_2_4_3_80x.jpg" alt="" />

                  <div>
                    <h3>
                    {t("ShortCorset")}
                      <br />
                      LE 120.00
                    </h3>
                    <p>view details</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>

              <img
                src="images/Untitled-2_c3deccf5-8c45-4eae-8ed0-63383cd413a0_540x.jpg"
                alt=""
              />
              <div className="divflexy3">
                <div>
                  <p>{t("ShortCorset")}</p>
                  <h3>179.00 LE</h3>
                </div>
                <Link to="/Productss">
                <abbr title="View Details">
                  <ImEye />
                </abbr>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sec6">
        <Container>
          <Row className="rowproduct">
            <Col lg="8" md="8" sm="12">
              <Row className="productsshow">
                <Col lg="4" md="4" sm="12">
                  <img
                    src="images/126092902_363731078221416_3923172392216927851_n.jpg"
                    alt=""
                  />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img
                    src="images/125805091_1244092065966946_7480077131728639836_n.jpg"
                    alt=""
                  />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img
                    src="images/126106436_366020964688525_7792254897032838113_n.jpg"
                    alt=""
                  />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img
                    src="images/126398977_221851472632792_6291091317212891166_n.jpg"
                    alt=""
                  />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img
                    src="images/126197996_385197312744633_6397005439344767247_n.jpg"
                    alt=""
                  />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img
                    src="images/125474066_691332491496782_8130376826513537460_n.jpg"
                    alt=""
                  />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4" md="4" sm="12" className="colproduct">
              <h3>{t("VintageStyle")}</h3>
              <p>
              {t("VintageStyleB")}
              </p>
              <div className="flexyyyyy">
                <div></div> <h5>#Peacetheme</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
